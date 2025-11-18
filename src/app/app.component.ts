import { Component, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DarkModeToggleComponent } from './app/dark-mode-toggle/dark-mode-toggle.component';
import { VimModeToggleComponent } from './app/vim-mode-toggle/vim-mode-toggle.component';
import { SearchModalComponent } from './app/search-modal/search-modal.component';
import { HintOverlayComponent } from './app/hint-overlay/hint-overlay.component';
import { VimModeService } from './app/vim-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, DarkModeToggleComponent, VimModeToggleComponent, SearchModalComponent, HintOverlayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'johmara.github.io';
  isSearchModalOpen = false;
  isVimTooltipOpen = false;
  
  // Inject to ensure VimModeService is initialized
  vimModeService = inject(VimModeService);

  ngOnInit(): void {
    // Register search trigger callback for vim mode '/' key
    this.vimModeService.onSearchTrigger = () => this.openSearchModal();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    // Handle Ctrl+K / Cmd+K for search modal (works regardless of vim mode)
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      this.openSearchModal();
    }
  }

  openSearchModal(): void {
    this.isSearchModalOpen = true;
  }

  closeSearchModal(): void {
    this.isSearchModalOpen = false;
  }

  toggleVimTooltip(): void {
    this.isVimTooltipOpen = !this.isVimTooltipOpen;
  }
}
