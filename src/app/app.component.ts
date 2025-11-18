import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DarkModeToggleComponent } from './app/dark-mode-toggle/dark-mode-toggle.component';
import { SearchModalComponent } from './app/search-modal/search-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, DarkModeToggleComponent, SearchModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'johmara.github.io';
  isSearchModalOpen = false;

  @HostListener('document:keydown.control.k', ['$event'])
  @HostListener('document:keydown.meta.k', ['$event']) // For Mac users
  onSearchShortcut(event: KeyboardEvent): void {
    event.preventDefault();
    this.openSearchModal();
  }

  openSearchModal(): void {
    this.isSearchModalOpen = true;
  }

  closeSearchModal(): void {
    this.isSearchModalOpen = false;
  }
}
