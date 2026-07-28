import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { PublicationsService } from '../publications.service';
import { Publication } from '../models/publication.model';
import { getTimelineEvents, TimelineEvent } from '../data/timeline-data';

interface RawTimelineEvent {
  category: 'work' | 'education';
  occupation: string;
  title: string;
  from_date: string;
  to_date: string | null;
  description: string;
  languages?: string[];
  tools?: string[];
  tech?: string[];
  link?: string;
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

interface PositionOfTrust {
  title: string;
  organization: string;
  from_date: string;
  to_date: string | null;
  description?: string;
}

interface CvExtra {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website: string;
  };
  skills: string[];
  extraTimelineEvents: RawTimelineEvent[];
  certificates: Certificate[];
  positionsOfTrust: PositionOfTrust[];
  extraSections: { heading: string; items: string[] }[];
}

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent implements OnInit {
  extra: CvExtra | null = null;
  publications: Publication[] = [];
  morePublicationsCount = 0;
  workEvents: TimelineEvent[] = [];
  educationEvents: TimelineEvent[] = [];
  certificates: (Certificate & { dateObj: Date })[] = [];
  positionsOfTrust: (PositionOfTrust & { fromObj: Date; toObj: Date | null })[] = [];
  private now = new Date(Date.now());

  constructor(
    private http: HttpClient,
    private publicationsService: PublicationsService
  ) {}

  ngOnInit(): void {
    this.http.get<CvExtra>('assets/cv/cv-extra.json').subscribe(data => {
      this.extra = data;

      const extraEvents: TimelineEvent[] = (data.extraTimelineEvents ?? []).map(e => ({
        from_date: new Date(e.from_date),
        to_date: e.to_date ? new Date(e.to_date) : this.now,
        title: e.title,
        occupation: e.occupation,
        description: e.description,
        category: e.category,
        tech: e.tech ?? [],
        languages: e.languages ?? [],
        tools: e.tools ?? [],
        link: e.link ?? '',
        isHovered: false
      }));

      const allEvents = [...getTimelineEvents(this.now), ...extraEvents]
        .sort((a, b) => b.from_date.getTime() - a.from_date.getTime());
      this.workEvents = allEvents.filter(e => e.category === 'work');
      this.educationEvents = allEvents.filter(e => e.category === 'education');

      this.certificates = (data.certificates ?? [])
        .map(c => ({ ...c, dateObj: new Date(c.date) }))
        .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

      this.positionsOfTrust = (data.positionsOfTrust ?? [])
        .map(p => ({ ...p, fromObj: new Date(p.from_date), toObj: p.to_date ? new Date(p.to_date) : null }))
        .sort((a, b) => b.fromObj.getTime() - a.fromObj.getTime());
    });

    this.publicationsService.getPublications().subscribe(data => {
      const sorted = data.sort((a, b) => b.date.localeCompare(a.date));
      this.publications = sorted.filter(p => p.featured);
      this.morePublicationsCount = sorted.length - this.publications.length;
    });
  }

  print(): void {
    window.print();
  }

  formatRange(event: TimelineEvent): string {
    const from = event.from_date.getFullYear();
    return event.to_date === this.now
      ? `${from} – Present`
      : `${from} – ${event.to_date.getFullYear()}`;
  }

  formatPositionRange(position: { fromObj: Date; toObj: Date | null }): string {
    const from = position.fromObj.getFullYear();
    return position.toObj === null
      ? `${from} – Present`
      : `${from} – ${position.toObj.getFullYear()}`;
  }
}
