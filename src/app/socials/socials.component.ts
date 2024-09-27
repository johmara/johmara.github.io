import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {
  socialLinks = [
    { url: 'https://www.linkedin.com/in/johanmartinson', icon: 'fab fa-linkedin' },
    { url: 'https://scholar.google.com/citations?user=ayfeHCEAAAAJ&hl=en', icon: 'fas fa-graduation-cap' },
    { url: 'https://orcid.org/0000-0002-4097-4374', icon: 'fab fa-orcid' },
    { url: 'https://twitter.com/JohanMartinson', icon: 'fab fa-x-twitter' },
    { url: 'https://github.com/johmara', icon: 'fab fa-github' }
  ];
}
