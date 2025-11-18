// src/app/bibtex-modal/bibtex-modal.component.ts
import { Component, Inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import { ThemeService } from '../app/theme.service';
import { VimModeService } from '../app/vim-mode.service';

@Component({
  selector: 'app-bibtex-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bibtex-modal.component.html',
  styleUrls: ['./bibtex-modal.component.scss']
})
export class BibtexModalComponent implements OnInit, OnDestroy {
  private yPressed = false;
  private yPressTimeout?: number;

  constructor(
    public dialogRef: MatDialogRef<BibtexModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { bibtex: string },
    public themeService: ThemeService,
    public vimModeService: VimModeService
  ) {}

  ngOnInit(): void {
    // The dialog will inherit dark mode from the global document element
  }

  ngOnDestroy(): void {
    if (this.yPressTimeout) {
      window.clearTimeout(this.yPressTimeout);
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    // Ctrl+C to copy
    if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
      event.preventDefault();
      this.copyToClipboard();
      return;
    }

    // Vim mode: yy to copy (yank)
    if (this.vimModeService.isVimModeEnabled() && event.key === 'y') {
      event.preventDefault();
      
      if (this.yPressed) {
        // Second 'y' press - execute copy
        this.copyToClipboard();
        this.yPressed = false;
        if (this.yPressTimeout) {
          window.clearTimeout(this.yPressTimeout);
          this.yPressTimeout = undefined;
        }
      } else {
        // First 'y' press - wait for second
        this.yPressed = true;
        this.yPressTimeout = window.setTimeout(() => {
          this.yPressed = false;
          this.yPressTimeout = undefined;
        }, 500); // Reset after 500ms
      }
      return;
    }

    // Escape to close
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeDialog();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.data.bibtex).then(() => {
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
}
