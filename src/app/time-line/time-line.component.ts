import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from "@angular/router";
import { getTimelineEvents } from '../data/timeline-data';

@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent {
  current_date = new Date(Date.now());
  selectedEvent: any = null;
  faArrowUpRight = faArrowRight;
  eventsToShow = 3; // Number of events to display initially

  timelineEvents = getTimelineEvents(this.current_date);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sortTimelineEvents();
    this.route.url.subscribe(url => {
      if (url.some(segment => segment.path === 'resume')) {
        this.showAllEvents();
      }
    });
  }

  sortTimelineEvents() {
    this.timelineEvents.sort((a, b) => {
      if (a.from_date < b.from_date) return 1;
      if (a.from_date > b.from_date) return -1;
      if (a.to_date < b.to_date) return 1;
      if (a.to_date > b.to_date) return -1;
      return 0;
    });
  }

  selectEvent(event: any) {
    this.selectedEvent = event;
  }

  getTotalTags(event: any): string[] {
    return [...event.languages, ...event.tools, ...event.tech];
  }

  getLimitedTags(event: any): string[] {
    return this.getTotalTags(event).slice(0, 4);
  }

  getTagClass(tag: string, event: any): string {
    if (event.tech.includes(tag)) {
      return 'tech';
    } else if (event.languages.includes(tag)) {
      return 'language';
    } else if (event.tools.includes(tag)) {
      return 'tool';
    }
    return '';
  }

  onMouseEnter(event: any) {
    event.isHovered = true;
  }

  onMouseLeave(event: any) {
    event.isHovered = false;
  }

  showAllEvents() {
    this.eventsToShow = this.timelineEvents.length;
  }

  allEventsShown() {
    return this.eventsToShow === this.timelineEvents.length;
  }
}
