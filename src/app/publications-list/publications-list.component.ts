import {Component, OnInit} from '@angular/core';
import {Publication} from '../models/publication.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PublicationsService} from '../publications.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {formatBibTeX} from "../utils/bibtex-formatter";
import {BibtexModalComponent} from "../bibtex-modal/bibtex-modal.component";

@Component({
  selector: 'app-publications-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.scss']
})
export class PublicationsListComponent implements OnInit {
  publications: Publication[] = [];
  filteredPublications: Publication[] = [];
  searchQuery: string = '';
  sortField: string = 'year';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private dialog: MatDialog, private publicationsService: PublicationsService) {
  }

  ngOnInit() {
    this.loadPublications();
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
      if (a[field] > b[field]) {
        comparison = 1;
      } else if (a[field] < b[field]) {
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

  async fetchBibtex(doi: string) {
    const url = `https://api.crossref.org/works/${encodeURIComponent(doi)}/transform/application/x-bibtex`;
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/x-bibtex'
        }
      });

      if (!response.ok) {
        throw new Error(`Error fetching BibTeX: ${response.statusText}`);
      }

      const bibtex = await response.text();
      const formattedBibTex = formatBibTeX(bibtex);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = { bibtex: formattedBibTex };
      dialogConfig.width = 'auto';
      dialogConfig.height = 'auto';
      dialogConfig.position = { top: '10px' };
      dialogConfig.panelClass = 'custom-dialog-container';

      // Close any open dialogs before opening a new one
      if (this.dialog.openDialogs.length > 0) {
        this.dialog.closeAll();
      }

      this.dialog.open(BibtexModalComponent, dialogConfig);
    } catch (error) {
      console.error(error);
    }
  }
}
