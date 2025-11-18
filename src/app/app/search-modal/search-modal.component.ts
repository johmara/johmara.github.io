import { Component, EventEmitter, HostListener, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { PublicationsService } from '../../publications.service';
import { ProjectsService } from '../../projects.service';
import { Publication } from '../../models/publication.model';
import { Project } from '../../models/project.model';
import { AuthorNamePipe } from '../../pipes/author-name.pipe';

interface SearchResult {
  type: 'publication' | 'project';
  title: string;
  description: string;
  link: string;
  metadata?: string;
  data: Publication | Project;
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
  
  searchQuery = '';
  allResults: SearchResult[] = [];
  filteredResults: SearchResult[] = [];
  selectedIndex = 0;
  
  private publicationsService = inject(PublicationsService);
  private projectsService = inject(ProjectsService);

  ngOnInit(): void {
    forkJoin({
      publications: this.publicationsService.getPublications(),
      projects: this.projectsService.getProjects()
    }).subscribe(({ publications, projects }) => {
      this.allResults = [
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

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeModal();
  }

  @HostListener('document:keydown.arrowdown', ['$event'])
  onArrowDown(event: KeyboardEvent): void {
    event.preventDefault();
    if (this.selectedIndex < this.filteredResults.length - 1) {
      this.selectedIndex++;
      this.scrollToSelected();
    }
  }

  @HostListener('document:keydown.arrowup', ['$event'])
  onArrowUp(event: KeyboardEvent): void {
    event.preventDefault();
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.scrollToSelected();
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent): void {
    event.preventDefault();
    if (this.filteredResults[this.selectedIndex]) {
      this.openResult(this.filteredResults[this.selectedIndex]);
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
    window.open(result.link, '_blank');
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
