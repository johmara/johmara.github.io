import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VimModeService } from '../vim-mode.service';

@Component({
  selector: 'app-hint-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hint-overlay.component.html',
  styleUrls: ['./hint-overlay.component.scss']
})
export class HintOverlayComponent {
  constructor(public vimModeService: VimModeService) {}
}

