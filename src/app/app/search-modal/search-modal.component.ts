import { Component, EventEmitter, HostListener, OnInit, Output, inject, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { PublicationsService } from '../../publications.service';
import { ProjectsService } from '../../projects.service';
import { Publication } from '../../models/publication.model';
import { Project } from '../../models/project.model';
import { AuthorNamePipe } from '../../pipes/author-name.pipe';
import { VimModeService } from '../vim-mode.service';

interface SearchResult {
  type: 'publication' | 'project' | 'page';
  title: string;
  description: string;
  link: string;
  metadata?: string;
  data?: Publication | Project;
}

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, AuthorNamePipe],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss'
})
export class SearchModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;
  
  searchQuery = '';
  allResults: SearchResult[] = [];
  filteredResults: SearchResult[] = [];
  selectedIndex = 0;
  
  private publicationsService = inject(PublicationsService);
  private projectsService = inject(ProjectsService);
  vimModeService = inject(VimModeService);

  ngOnInit(): void {
    // Define page routes
    const pages: SearchResult[] = [
      {
        type: 'page',
        title: 'Publications',
        description: 'View all publications and research papers',
        link: '#/publications',
        metadata: 'All Publications, Research Papers, Academic Work'
      },
      {
        type: 'page',
        title: 'Home',
        description: 'Main page with overview of publications and projects',
        link: '#/',
        metadata: 'Homepage, Overview, Landing Page'
      }
    ];

    forkJoin({
      publications: this.publicationsService.getPublications(),
      projects: this.projectsService.getProjects()
    }).subscribe(({ publications, projects }) => {
      this.allResults = [
        ...pages,
        ...publications.map(pub => ({
          type: 'publication' as const,
          title: pub.title,
          description: pub.description,
          link: pub.link,
          metadata: `${pub.authors} • ${pub.date}`,
          data: pub
        })),
        ...projects.map(proj => ({
          type: 'project' as const,
          title: proj.title,
          description: proj.description,
          link: proj.link || proj.repo,
          metadata: proj.tags.join(', '),
          data: proj
        }))
      ];
      this.filteredResults = this.allResults;
    });
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    const isSearchInputFocused = target.classList.contains('search-input');

    // Handle Escape - close modal or blur input
    if (event.key === 'Escape') {
      if (isSearchInputFocused) {
        // Blur the input to enter navigation mode
        this.searchInput?.nativeElement.blur();
        event.preventDefault();
      } else {
        // Close the modal
        this.closeModal();
      }
      return;
    }

    // Handle Enter - always open selected result (works in both insert and normal mode)
    if (event.key === 'Enter') {
      event.preventDefault();
      if (this.filteredResults[this.selectedIndex]) {
        this.openResult(this.filteredResults[this.selectedIndex]);
      }
      return;
    }

    // If search input is focused, allow normal typing (no vim navigation)
    if (isSearchInputFocused) {
      return;
    }

    // Vim mode: 'i' to enter insert mode (focus search input)
    if (this.vimModeService.isVimModeEnabled() && event.key === 'i' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      this.searchInput?.nativeElement.focus();
      return;
    }

    // Handle j/k for vim mode navigation (only when not in input)
    if (this.vimModeService.isVimModeEnabled()) {
      if (event.key === 'j' && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        event.stopPropagation();
        this.navigateDown();
        return;
      }
      if (event.key === 'k' && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        event.stopPropagation();
        this.navigateUp();
        return;
      }
    }

    // Handle arrow keys (always available when not in input)
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.navigateDown();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.navigateUp();
    }
  }

  private navigateDown(): void {
    if (this.selectedIndex < this.filteredResults.length - 1) {
      this.selectedIndex++;
      this.scrollToSelected();
    }
  }

  private navigateUp(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.scrollToSelected();
    }
  }

  onSearch(): void {
    this.selectedIndex = 0;
    if (!this.searchQuery.trim()) {
      this.filteredResults = this.allResults;
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredResults = this.allResults.filter(result => 
      result.title.toLowerCase().includes(query) ||
      result.description.toLowerCase().includes(query) ||
      (result.metadata?.toLowerCase().includes(query) ?? false)
    );
  }

  openResult(result: SearchResult): void {
    if (result.type === 'page') {
      // Internal navigation - use router
      window.location.href = result.link;
    } else {
      // External link - open in new tab
      window.open(result.link, '_blank');
    }
    this.closeModal();
  }

  closeModal(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  private scrollToSelected(): void {
    setTimeout(() => {
      const selected = document.querySelector('.search-result.selected');
      selected?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  }
}
