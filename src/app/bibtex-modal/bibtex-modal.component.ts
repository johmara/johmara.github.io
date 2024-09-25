// src/app/bibtex-modal/bibtex-modal.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bibtex-modal',
  standalone: true,
  imports: [],
  templateUrl: './bibtex-modal.component.html',
  styleUrls: ['./bibtex-modal.component.scss']
})
export class BibtexModalComponent {
  constructor(
    public dialogRef: MatDialogRef<BibtexModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { bibtex: string }
  ) {}

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
