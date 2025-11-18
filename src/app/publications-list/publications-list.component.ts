import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {Publication} from '../models/publication.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PublicationsService} from '../publications.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PublicationDetailModalComponent} from "../publication-detail-modal/publication-detail-modal.component";
import {VimModeService} from '../app/vim-mode.service';

@Component({
  selector: 'app-publications-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.scss']
})
export class PublicationsListComponent implements OnInit, OnDestroy {
  publications: Publication[] = [];
  filteredPublications: Publication[] = [];
  searchQuery: string = '';
  sortField: string = 'year';
  sortDirection: 'asc' | 'desc' = 'asc';

  @ViewChild('filterInput') filterInput?: ElementRef<HTMLInputElement>;

  constructor(
    private dialog: MatDialog, 
    private publicationsService: PublicationsService,
    private vimModeService: VimModeService
  ) {
  }

  ngOnInit() {
    this.loadPublications();
    
    // Register filter trigger callback for vim mode
    this.vimModeService.onFilterTrigger = () => {
      this.focusFilterInput();
    };
  }

  ngOnDestroy() {
    // Clean up callback when component is destroyed
    this.vimModeService.onFilterTrigger = undefined;
  }

  loadPublications() {
    this.publicationsService.getPublications().subscribe(data => {
      this.publications = data;
      this.filteredPublications = data;
      this.sortPublicationsByDate();
    });
  }

  sortPublicationsByDate() {
    this.publications.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  search() {
    this.filteredPublications = this.publications.filter(pub =>
      pub.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.sort();
  }

  sort() {
    this.filteredPublications.sort((a, b) => {
      let comparison = 0;
      const field = this.sortField as keyof Publication;
      const aValue = a[field];
      const bValue = b[field];
      
      if (aValue && bValue && aValue > bValue) {
        comparison = 1;
      } else if (aValue && bValue && aValue < bValue) {
        comparison = -1;
      }
      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
  }

  setSortField(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.sort();
  }

  getSortIcon(field: string): string {
  if (this.sortField === field) {
    return this.sortDirection === 'asc' ? 'fa-sort-up' : 'fa-sort-down';
  }
  return 'fa-sort';
}

  openAbstractView(publication: Publication): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { publication, showBibtex: false };
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.panelClass = 'custom-dialog-container';

    // Close any open dialogs before opening a new one
    if (this.dialog.openDialogs.length > 0) {
      this.dialog.closeAll();
    }

    this.dialog.open(PublicationDetailModalComponent, dialogConfig);
  }

  openBibtexView(publication: Publication): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { publication, showBibtex: true };
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.panelClass = 'custom-dialog-container';

    // Close any open dialogs before opening a new one
    if (this.dialog.openDialogs.length > 0) {
      this.dialog.closeAll();
    }

    this.dialog.open(PublicationDetailModalComponent, dialogConfig);
  }

  openPdf(publication: Publication): void {
    if (publication.link) {
      window.open(publication.link, '_blank');
    }
  }

  focusFilterInput(): void {
    // Focus the filter input when triggered via vim mode
    if (this.filterInput) {
      this.filterInput.nativeElement.focus();
    }
  }
}

