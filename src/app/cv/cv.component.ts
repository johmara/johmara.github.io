import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { PublicationsService } from '../publications.service';
import { Publication } from '../models/publication.model';
import { getTimelineEvents, TimelineEvent } from '../data/timeline-data';

type Lang = 'en' | 'sv';

interface LocalizedText {
  title: string;
  description?: string;
}

interface RawTimelineEvent {
  category: 'work' | 'education';
  occupation: string;
  occupation_sv?: string;
  title: string;
  from_date: string;
  to_date: string | null;
  description: string;
  description_sv?: string;
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

interface RawPositionOfTrust {
  organization: string;
  from_date: string;
  to_date: string | null;
  en: LocalizedText;
  sv: LocalizedText;
}

interface CvExtra {
  name: string;
  en: { title: string; summary: string; location: string };
  sv: { title: string; summary: string; location: string };
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  skills: string[];
  extraTimelineEvents: RawTimelineEvent[];
  certificates: Certificate[];
  positionsOfTrust: RawPositionOfTrust[];
  extraSections: { en: { heading: string; items: string[] }; sv: { heading: string; items: string[] } }[];
}

const STRINGS: Record<Lang, Record<string, string>> = {
  en: {
    backToSite: 'Back to site',
    print: 'Download / Print PDF',
    summary: 'Summary',
    experience: 'Experience',
    education: 'Education',
    publications: 'Publications',
    positionsOfTrust: 'Positions of Trust',
    certificates: 'Certificates',
    skills: 'Skills',
    present: 'Present',
    accepted: '(accepted)',
    fullPublicationList: 'full publication list'
  },
  sv: {
    backToSite: 'Tillbaka till webbplatsen',
    print: 'Ladda ner / Skriv ut PDF',
    summary: 'Sammanfattning',
    experience: 'Erfarenhet',
    education: 'Utbildning',
    publications: 'Publikationer',
    positionsOfTrust: 'Förtroendeuppdrag',
    certificates: 'Certifikat',
    skills: 'Kompetenser',
    present: 'Nutid',
    accepted: '(accepterad)',
    fullPublicationList: 'fullständig publikationslista'
  }
};

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
  positionsOfTrust: (RawPositionOfTrust & { fromObj: Date; toObj: Date | null })[] = [];
  lang: Lang = 'en';
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
        occupation_sv: e.occupation_sv,
        description: e.description,
        description_sv: e.description_sv,
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

  get t(): Record<string, string> {
    return STRINGS[this.lang];
  }

  get title(): string {
    return this.extra ? this.extra[this.lang].title : '';
  }

  get summary(): string {
    return this.extra ? this.extra[this.lang].summary : '';
  }

  get location(): string {
    return this.extra ? this.extra[this.lang].location : '';
  }

  setLang(lang: Lang): void {
    this.lang = lang;
  }

  print(): void {
    window.print();
  }

  occupationText(event: TimelineEvent): string {
    return this.lang === 'sv' && event.occupation_sv ? event.occupation_sv : event.occupation;
  }

  descriptionText(event: TimelineEvent): string {
    return this.lang === 'sv' && event.description_sv ? event.description_sv : event.description;
  }

  posTitle(position: RawPositionOfTrust): string {
    return position[this.lang].title;
  }

  posDescription(position: RawPositionOfTrust): string | undefined {
    return position[this.lang].description;
  }

  extraSection(section: { en: { heading: string; items: string[] }; sv: { heading: string; items: string[] } }) {
    return section[this.lang];
  }

  morePublicationsText(): string {
    const n = this.morePublicationsCount;
    return this.lang === 'sv'
      ? `+ ${n} publikation${n === 1 ? '' : 'er'} till — se`
      : `+ ${n} more publication${n === 1 ? '' : 's'} — see`;
  }

  formatRange(event: TimelineEvent): string {
    const from = event.from_date.getFullYear();
    return event.to_date === this.now
      ? `${from} – ${this.t['present']}`
      : `${from} – ${event.to_date.getFullYear()}`;
  }

  formatPositionRange(position: { fromObj: Date; toObj: Date | null }): string {
    const from = position.fromObj.getFullYear();
    return position.toObj === null
      ? `${from} – ${this.t['present']}`
      : `${from} – ${position.toObj.getFullYear()}`;
  }
}
