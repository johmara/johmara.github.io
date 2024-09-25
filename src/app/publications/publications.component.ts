import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorNamePipe } from '../pipes/author-name.pipe';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { BibtexModalComponent } from '../bibtex-modal/bibtex-modal.component';
import {formatBibTeX} from "../utils/bibtex-formatter";
import {PublicationsService} from "../publications.service";
import {Publication} from "../models/publication.model";

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [
    CommonModule,
    AuthorNamePipe
  ],
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  publications: Publication[] = [];
  showAllPublicationsLink = false;

  constructor(private dialog: MatDialog,
              private publicationsService: PublicationsService) {
  }

  ngOnInit() {
    this.loadPublications();
  }

  loadPublications() {
    this.publicationsService.getPublications().subscribe(data => {
      this.publications = data;
      this.sortPublicationsByDate();
      this.showAllPublicationsLink = this.publications.length > 6;
    });
  }

  getPublications() {
    return this.publications.slice(0, 6);
  }

  sortPublicationsByDate() {
    this.publications.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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
