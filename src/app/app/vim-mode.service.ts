import { Injectable, signal, effect } from '@angular/core';

export interface VimNavigationEvent {
  key: string;
  preventDefault: () => void;
}

export interface HintElement {
  element: HTMLElement;
  hint: string;
  rect: DOMRect;
}

@Injectable({
  providedIn: 'root'
})
export class VimModeService {
  private readonly VIM_MODE_KEY = 'vim-mode-preference';
  isVimModeEnabled = signal<boolean>(false);
  isHintModeActive = signal<boolean>(false);
  hintElements = signal<HintElement[]>([]);
  currentHintIndex = signal<number>(0);
  private keydownListener?: (e: KeyboardEvent) => void;
  private currentHintInput = '';
  private lastKeyPress = '';
  private lastKeyTime = 0;
  
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

    // Handle hint mode
    if (this.isHintModeActive()) {
      this.handleHintModeInput(e);
      return;
    }

    // Don't trigger if modifier keys are pressed (except Shift for special keys)
    if (e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }

    const scrollAmount = 100; // pixels to scroll
    const now = Date.now();
    const isDoublePress = this.lastKeyPress === e.key && (now - this.lastKeyTime) < 500;
    
    this.lastKeyPress = e.key;
    this.lastKeyTime = now;

    // Handle search trigger with '/'
    if (e.key === '/' && !isSearchInput) {
      e.preventDefault();
      if (this.onSearchTrigger) {
        this.onSearchTrigger();
      }
      return;
    }

    // Activate hint mode with 'f' (follow links)
    if (e.key === 'f') {
      e.preventDefault();
      this.activateHintMode();
      return;
    }

    // Neovim-style screen position jumps
    if (e.key === 'H') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (e.key === 'M') {
      e.preventDefault();
      const middleScroll = (document.documentElement.scrollHeight - window.innerHeight) / 2;
      window.scrollTo({ top: middleScroll, behavior: 'smooth' });
      return;
    }

    if (e.key === 'L') {
      e.preventDefault();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      return;
    }

    // Ctrl+d and Ctrl+u for half page scrolling
    if (e.key === 'd' && isDoublePress) {
      e.preventDefault();
      window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
      return;
    }

    if (e.key === 'u' && isDoublePress) {
      e.preventDefault();
      window.scrollBy({ top: -window.innerHeight / 2, behavior: 'smooth' });
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
        // gg to go to top (double-tap g)
        if (isDoublePress) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        break;
      case 'G':
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        break;
    }
  }

  private activateHintMode(): void {
    this.isHintModeActive.set(true);
    this.currentHintInput = '';
    this.currentHintIndex.set(0);
    
    // Find all clickable/interactive elements on the entire page
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      '[role="button"]',
      '[tabindex]:not([tabindex="-1"])',
      '.publication-item',
      '.project-card'
    ];
    
    const elements = document.querySelectorAll(selectors.join(','));
    const hints: HintElement[] = [];
    
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      
      // Exclude elements within header controls and vim tooltip toggle
      if (htmlEl.closest('.header-controls') || 
          htmlEl.closest('.vim-tooltip-toggle') ||
          htmlEl.closest('.vim-tooltip')) {
        return;
      }
      
      const rect = htmlEl.getBoundingClientRect();
      
      // Include all elements (not just visible ones), but they must have dimensions
      if (rect.width > 0 && rect.height > 0) {
        hints.push({
          element: htmlEl,
          hint: this.generateHint(hints.length),
          rect: rect
        });
      }
    });
    
    this.hintElements.set(hints);
  }

  private generateHint(index: number): string {
    // Generate hints like: a, b, c, ... z, aa, ab, ac, ...
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let hint = '';
    let num = index;
    
    do {
      hint = chars[num % chars.length] + hint;
      num = Math.floor(num / chars.length) - 1;
    } while (num >= 0);
    
    return hint;
  }

  private handleHintModeInput(e: KeyboardEvent): void {
    // Escape exits hint mode
    if (e.key === 'Escape') {
      e.preventDefault();
      this.deactivateHintMode();
      return;
    }

    // Tab/n to cycle forward through hints, Shift+Tab/N to cycle backward
    if (e.key === 'Tab' || e.key === 'n' || e.key === 'N') {
      e.preventDefault();
      const hints = this.hintElements();
      if (hints.length === 0) return;
      
      if (e.shiftKey || e.key === 'N') {
        // Shift+Tab or N - cycle backward
        this.currentHintIndex.set((this.currentHintIndex() - 1 + hints.length) % hints.length);
      } else {
        // Tab or n - cycle forward
        this.currentHintIndex.set((this.currentHintIndex() + 1) % hints.length);
      }
      
      // Scroll to the selected hint
      const selectedHint = hints[this.currentHintIndex()];
      if (selectedHint) {
        selectedHint.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Enter to activate the currently selected hint
    if (e.key === 'Enter') {
      e.preventDefault();
      const hints = this.hintElements();
      const selectedHint = hints[this.currentHintIndex()];
      if (selectedHint) {
        this.navigateToElement(selectedHint.element);
        this.deactivateHintMode();
      }
      return;
    }

    // Allow j/k scrolling in hint mode (without regenerating hints)
    if (e.key === 'j' || e.key === 'k') {
      e.preventDefault();
      const scrollAmount = 100;
      
      if (e.key === 'j') {
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      } else {
        window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      }
      return;
    }

    // Only process letter keys (excluding n/N which are used for navigation)
    if (e.key.length === 1 && /[a-mo-z]/i.test(e.key)) {
      e.preventDefault();
      this.currentHintInput += e.key.toLowerCase();
      
      // Check for exact match
      const hints = this.hintElements();
      const match = hints.find(h => h.hint === this.currentHintInput);
      
      if (match) {
        // Navigate to the element
        this.navigateToElement(match.element);
        this.deactivateHintMode();
      } else {
        // Filter hints to only show matching ones
        const filteredHints = hints.filter(h => h.hint.startsWith(this.currentHintInput));
        
        if (filteredHints.length === 0) {
          // No matches, exit hint mode
          this.deactivateHintMode();
        } else if (filteredHints.length === 1) {
          // Only one match, navigate to it
          this.navigateToElement(filteredHints[0].element);
          this.deactivateHintMode();
        } else {
          // Multiple matches, update the hint list
          this.hintElements.set(filteredHints);
          // Reset current index when filtering
          this.currentHintIndex.set(0);
        }
      }
    }
  }

  private refreshHints(): void {
    // Clear current input when refreshing
    this.currentHintInput = '';
    this.currentHintIndex.set(0);
    
    // Find all clickable/interactive elements
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      '[role="button"]',
      '[tabindex]:not([tabindex="-1"])',
      '.publication-item',
      '.project-card'
    ];
    
    const elements = document.querySelectorAll(selectors.join(','));
    const hints: HintElement[] = [];
    
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      
      // Exclude elements within header controls and vim tooltip toggle
      if (htmlEl.closest('.header-controls') || 
          htmlEl.closest('.vim-tooltip-toggle') ||
          htmlEl.closest('.vim-tooltip')) {
        return;
      }
      
      const rect = htmlEl.getBoundingClientRect();
      
      // Only include visible elements
      if (rect.width > 0 && rect.height > 0 && 
          rect.top < window.innerHeight && rect.bottom > 0) {
        hints.push({
          element: htmlEl,
          hint: this.generateHint(hints.length),
          rect: rect
        });
      }
    });
    
    this.hintElements.set(hints);
  }

  private navigateToElement(element: HTMLElement): void {
    // If it's a link, click it
    if (element.tagName === 'A') {
      element.click();
    } 
    // If it's a button or has click handler, click it
    else if (element.tagName === 'BUTTON' || element.onclick || element.getAttribute('role') === 'button') {
      element.click();
    }
    // For inputs, focus them
    else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      (element as HTMLInputElement).focus();
    }
    // For other elements, try clicking
    else {
      element.click();
    }
  }

  private deactivateHintMode(): void {
    this.isHintModeActive.set(false);
    this.hintElements.set([]);
    this.currentHintInput = '';
    this.currentHintIndex.set(0);
  }
}
