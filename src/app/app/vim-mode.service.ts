import { Injectable, signal, effect } from '@angular/core';

export interface VimNavigationEvent {
  key: string;
  preventDefault: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class VimModeService {
  private readonly VIM_MODE_KEY = 'vim-mode-preference';
  isVimModeEnabled = signal<boolean>(false);
  private keydownListener?: (e: KeyboardEvent) => void;
  
  // Callback for search trigger via '/'
  onSearchTrigger?: () => void;

  constructor() {
    this.initializeVimMode();
    
    // Apply vim mode whenever it changes
    effect(() => {
      this.applyVimMode(this.isVimModeEnabled());
    });
  }

  private initializeVimMode(): void {
    const savedPreference = localStorage.getItem(this.VIM_MODE_KEY);
    
    if (savedPreference) {
      this.isVimModeEnabled.set(savedPreference === 'enabled');
    }
  }

  toggleVimMode(): void {
    const newMode = !this.isVimModeEnabled();
    this.isVimModeEnabled.set(newMode);
    localStorage.setItem(this.VIM_MODE_KEY, newMode ? 'enabled' : 'disabled');
  }

  private applyVimMode(isEnabled: boolean): void {
    // Remove existing listener if any
    if (this.keydownListener) {
      document.removeEventListener('keydown', this.keydownListener);
      this.keydownListener = undefined;
    }

    if (isEnabled) {
      this.keydownListener = (e: KeyboardEvent) => this.handleVimNavigation(e);
      document.addEventListener('keydown', this.keydownListener);
    }
  }

  private handleVimNavigation(e: KeyboardEvent): void {
    // Don't trigger vim navigation when typing in regular input fields
    const target = e.target as HTMLElement;
    const isSearchInput = target.classList.contains('search-input');
    
    // Block vim navigation in non-search inputs
    if (!isSearchInput && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return;
    }

    // Check if search modal is open (has modal-backdrop element)
    const isSearchModalOpen = document.querySelector('.modal-backdrop') !== null;
    
    // If search modal is open, let the modal component handle j/k navigation
    if (isSearchModalOpen && (e.key === 'j' || e.key === 'k')) {
      return;
    }

    // Don't trigger if modifier keys are pressed (except Shift for 'G')
    if (e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }

    const scrollAmount = 100; // pixels to scroll

    // Handle search trigger with '/'
    if (e.key === '/' && !isSearchInput) {
      e.preventDefault();
      if (this.onSearchTrigger) {
        this.onSearchTrigger();
      }
      return;
    }

    // Regular vim navigation (only when search modal is closed)
    switch (e.key) {
      case 'j':
        e.preventDefault();
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        break;
      case 'k':
        e.preventDefault();
        window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
        break;
      case 'g':
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'G':
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        break;
    }
  }
}
