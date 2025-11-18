import { Injectable, signal, effect } from '@angular/core';

export interface VimNavigationEvent {
  key: string;
  preventDefault: () => void;
}

export interface HintElement {
  element: HTMLElement;
  hint: string;
  rect: DOMRect;
  absoluteTop: number;
  absoluteLeft: number;
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
          rect: rect,
          absoluteTop: rect.top + window.scrollY,
          absoluteLeft: rect.left + window.scrollX
        });
      }
    });
    
    this.hintElements.set(hints);
    
    // Find the hint closest to the center of the viewport
    const viewportCenterY = window.innerHeight / 2;
    const viewportCenterX = window.innerWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    hints.forEach((hint, index) => {
      // Calculate center of the hint element
      const hintCenterY = hint.rect.top + hint.rect.height / 2;
      const hintCenterX = hint.rect.left + hint.rect.width / 2;
      
      // Calculate distance from viewport center
      const distance = Math.sqrt(
        Math.pow(hintCenterX - viewportCenterX, 2) + 
        Math.pow(hintCenterY - viewportCenterY, 2)
      );
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    this.currentHintIndex.set(closestIndex);
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

    // Handle double-tap 'g' for first hint on page (gg)
    const now = Date.now();
    const isDoubleG = this.lastKeyPress === 'g' && e.key === 'g' && (now - this.lastKeyTime) < 500;
    
    if (isDoubleG) {
      e.preventDefault();
      this.selectFirstHintOnPage();
      this.lastKeyPress = '';
      return;
    }

    // 'G' to select last hint on page
    if (e.key === 'G') {
      e.preventDefault();
      this.selectLastHintOnPage();
      return;
    }

    // 'H' to select first hint on screen (high)
    if (e.key === 'H') {
      e.preventDefault();
      this.selectFirstHintOnScreen();
      return;
    }

    // 'M' to select hint closest to middle of screen
    if (e.key === 'M') {
      e.preventDefault();
      this.selectClosestHintToCenter();
      return;
    }

    // 'L' to select last hint on screen (low)
    if (e.key === 'L') {
      e.preventDefault();
      this.selectLastHintOnScreen();
      return;
    }

    // Update last key press for double-tap detection
    this.lastKeyPress = e.key;
    this.lastKeyTime = now;

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

    // Only process letter keys (excluding g, n/N which are used for navigation)
    // Also exclude uppercase letters that are used for navigation (G, H, L, M)
    if (e.key.length === 1 && /[a-fh-mo-z]/i.test(e.key) && !e.shiftKey) {
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
          rect: rect,
          absoluteTop: rect.top + window.scrollY,
          absoluteLeft: rect.left + window.scrollX
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

  private selectFirstHintOnScreen(): void {
    const hints = this.hintElements();
    if (hints.length === 0) return;

    // Get fresh bounding rectangles to check current visibility
    const visibleHints = hints
      .map((hint, index) => {
        const currentRect = hint.element.getBoundingClientRect();
        return { hint, index, currentRect };
      })
      .filter(({ currentRect }) => {
        // Check if element is currently visible in viewport
        return currentRect.top >= 0 && currentRect.top < window.innerHeight;
      });

    if (visibleHints.length === 0) return;

    // Find the hint with the smallest top position (first on screen)
    const firstHint = visibleHints.reduce((prev, curr) => 
      curr.currentRect.top < prev.currentRect.top ? curr : prev
    );

    this.currentHintIndex.set(firstHint.index);

    // Scroll to the selected hint
    if (firstHint.hint) {
      firstHint.hint.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private selectLastHintOnScreen(): void {
    const hints = this.hintElements();
    if (hints.length === 0) return;

    // Get fresh bounding rectangles to check current visibility
    const visibleHints = hints
      .map((hint, index) => {
        const currentRect = hint.element.getBoundingClientRect();
        return { hint, index, currentRect };
      })
      .filter(({ currentRect }) => {
        // Check if element is currently visible in viewport
        return currentRect.bottom > 0 && currentRect.bottom <= window.innerHeight;
      });

    if (visibleHints.length === 0) return;

    // Find the hint with the largest bottom position (last on screen)
    const lastHint = visibleHints.reduce((prev, curr) => 
      curr.currentRect.bottom > prev.currentRect.bottom ? curr : prev
    );

    this.currentHintIndex.set(lastHint.index);

    // Scroll to the selected hint
    if (lastHint.hint) {
      lastHint.hint.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private selectClosestHintToCenter(): void {
    const hints = this.hintElements();
    if (hints.length === 0) return;

    const viewportCenterY = window.innerHeight / 2;
    const viewportCenterX = window.innerWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    hints.forEach((hint, index) => {
      // Get fresh bounding rectangle
      const currentRect = hint.element.getBoundingClientRect();
      
      // Calculate center of the hint element
      const hintCenterY = currentRect.top + currentRect.height / 2;
      const hintCenterX = currentRect.left + currentRect.width / 2;
      
      // Calculate distance from viewport center
      const distance = Math.sqrt(
        Math.pow(hintCenterX - viewportCenterX, 2) + 
        Math.pow(hintCenterY - viewportCenterY, 2)
      );
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    this.currentHintIndex.set(closestIndex);
    
    // Scroll to the selected hint
    const selectedHint = hints[closestIndex];
    if (selectedHint) {
      selectedHint.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private selectFirstHintOnPage(): void {
    const hints = this.hintElements();
    if (hints.length === 0) return;

    // Select the very first hint (index 0)
    this.currentHintIndex.set(0);

    // Scroll to the selected hint
    const firstHint = hints[0];
    if (firstHint) {
      firstHint.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private selectLastHintOnPage(): void {
    const hints = this.hintElements();
    if (hints.length === 0) return;

    // Select the very last hint
    const lastIndex = hints.length - 1;
    this.currentHintIndex.set(lastIndex);

    // Scroll to the selected hint
    const lastHint = hints[lastIndex];
    if (lastHint) {
      lastHint.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private deactivateHintMode(): void {
    this.isHintModeActive.set(false);
    this.hintElements.set([]);
    this.currentHintInput = '';
    this.currentHintIndex.set(0);
  }
}
