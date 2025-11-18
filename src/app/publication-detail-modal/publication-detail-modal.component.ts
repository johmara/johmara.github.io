import { Component, Inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Publication } from '../models/publication.model';
import { formatBibTeX } from '../utils/bibtex-formatter';
import { VimModeService } from '../app/vim-mode.service';

@Component({
  selector: 'app-publication-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publication-detail-modal.component.html',
  styleUrls: ['./publication-detail-modal.component.scss']
})
export class PublicationDetailModalComponent implements OnInit, OnDestroy {
  publication: Publication;
  bibtex: string = '';
  isLoadingBibtex: boolean = false;
  showBibtex: boolean = false;
  private modalElement?: HTMLElement;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { publication: Publication, showBibtex?: boolean },
    private dialogRef: MatDialogRef<PublicationDetailModalComponent>,
    public vimModeService: VimModeService
  ) {
    this.publication = data.publication;
    this.showBibtex = data.showBibtex || false;
  }

  ngOnInit(): void {
    // Find the modal body element for scrolling
    setTimeout(() => {
      this.modalElement = document.querySelector('.modal-body') as HTMLElement;
    });

    // If we should show bibtex on init, fetch it
    if (this.showBibtex && !this.bibtex) {
      this.fetchBibtex();
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.vimModeService.isVimModeEnabled()) {
      return;
    }

    // Don't interfere with input elements
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      return;
    }

    switch (event.key) {
      case 'Escape':
      case 'q':
        event.preventDefault();
        this.close();
        break;
      case 'j':
        event.preventDefault();
        this.scrollDown();
        break;
      case 'k':
        event.preventDefault();
        this.scrollUp();
        break;
      case 'd':
        if (event.ctrlKey) {
          event.preventDefault();
          this.scrollDownPage();
        }
        break;
      case 'u':
        if (event.ctrlKey) {
          event.preventDefault();
          this.scrollUpPage();
        }
        break;
      case 'g':
        event.preventDefault();
        this.handleGKey(event);
        break;
      case 'G':
        event.preventDefault();
        this.scrollToBottom();
        break;
      case 'y':
        event.preventDefault();
        this.handleYKey(event);
        break;
      case 'p':
        event.preventDefault();
        this.openPDF();
        break;
    }
  }

  private lastGKeyTime = 0;
  private handleGKey(event: KeyboardEvent): void {
    const now = Date.now();
    if (now - this.lastGKeyTime < 500) {
      // Double 'g' pressed - scroll to top
      this.scrollToTop();
      this.lastGKeyTime = 0;
    } else {
      this.lastGKeyTime = now;
    }
  }

  private lastYKeyTime = 0;
  private handleYKey(event: KeyboardEvent): void {
    const now = Date.now();
    if (now - this.lastYKeyTime < 500) {
      // Double 'y' pressed - yank/copy citation
      this.copyCitation();
      this.lastYKeyTime = 0;
    } else {
      this.lastYKeyTime = now;
    }
  }

  private scrollDown(): void {
    if (this.modalElement) {
      this.modalElement.scrollBy({ top: 40, behavior: 'smooth' });
    }
  }

  private scrollUp(): void {
    if (this.modalElement) {
      this.modalElement.scrollBy({ top: -40, behavior: 'smooth' });
    }
  }

  private scrollDownPage(): void {
    if (this.modalElement) {
      this.modalElement.scrollBy({ top: this.modalElement.clientHeight / 2, behavior: 'smooth' });
    }
  }

  private scrollUpPage(): void {
    if (this.modalElement) {
      this.modalElement.scrollBy({ top: -this.modalElement.clientHeight / 2, behavior: 'smooth' });
    }
  }

  private scrollToTop(): void {
    if (this.modalElement) {
      this.modalElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  private scrollToBottom(): void {
    if (this.modalElement) {
      this.modalElement.scrollTo({ top: this.modalElement.scrollHeight, behavior: 'smooth' });
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  onOverlayClick(event: MouseEvent): void {
    // Close modal when clicking on the overlay (not on the modal content itself)
    this.close();
  }

  async toggleBibtex(): Promise<void> {
    if (this.showBibtex) {
      // Switch back to abstract
      this.showBibtex = false;
    } else {
      // Switch to BibTeX
      if (!this.bibtex) {
        await this.fetchBibtex();
      }
      this.showBibtex = true;
    }
  }

  async copyCitation(): Promise<void> {
    // Format a simple citation string
    const citation = `${this.publication.authors} (${new Date(this.publication.date).getFullYear()}). ${this.publication.title}.`;
    
    try {
      await navigator.clipboard.writeText(citation);
      console.log('Citation copied to clipboard');
    } catch (error) {
      console.error('Failed to copy citation:', error);
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
