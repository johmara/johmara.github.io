import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tools-dropdown',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tools-dropdown.component.html',
  styleUrl: './tools-dropdown.component.scss'
})
export class ToolsDropdownComponent {
  isOpen = false;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('app-tools-dropdown')) {
      this.isOpen = false;
    }
  }
}
