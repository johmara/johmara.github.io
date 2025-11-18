import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Publication } from '../models/publication.model';
import { formatBibTeX } from '../utils/bibtex-formatter';

@Component({
  selector: 'app-publication-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publication-detail-modal.component.html',
  styleUrls: ['./publication-detail-modal.component.scss']
})
export class PublicationDetailModalComponent {
  publication: Publication;
  bibtex: string = '';
  isLoadingBibtex: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { publication: Publication },
    private dialogRef: MatDialogRef<PublicationDetailModalComponent>
  ) {
    this.publication = data.publication;
  }

  close(): void {
    this.dialogRef.close();
  }

  async copyCitation(): Promise<void> {
    if (!this.bibtex) {
      await this.fetchBibtex();
    }
    
    if (this.bibtex) {
      try {
        await navigator.clipboard.writeText(this.bibtex);
        // You could add a toast notification here
        console.log('Citation copied to clipboard');
      } catch (error) {
        console.error('Failed to copy citation:', error);
      }
    }
  }

  async fetchBibtex(): Promise<void> {
    if (!this.publication.doi || this.bibtex) {
      return;
    }

    this.isLoadingBibtex = true;
    const url = `https://api.crossref.org/works/${encodeURIComponent(this.publication.doi)}/transform/application/x-bibtex`;
    
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
      this.bibtex = formatBibTeX(bibtex);
    } catch (error) {
      console.error('Failed to fetch BibTeX:', error);
    } finally {
      this.isLoadingBibtex = false;
    }
  }

  openPDF(): void {
    window.open(this.publication.link, '_blank');
  }
}
