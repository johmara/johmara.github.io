import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VimModeService } from '../vim-mode.service';

@Component({
  selector: 'app-vim-mode-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vim-mode-toggle.component.html',
  styleUrl: './vim-mode-toggle.component.scss'
})
export class VimModeToggleComponent {
  vimModeService = inject(VimModeService);

  toggleVimMode(): void {
    this.vimModeService.toggleVimMode();
  }
}
