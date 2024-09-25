import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


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
  showAllEvents = false; // Track whether to show all events
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;


  timelineEvents = [
    {
      from_date: new Date('2023-09-13'),
      to_date: this.current_date,
      title: 'Ruhr University Bochum',
      occupation: 'PhD Student',
      description: '',
      tech: [],
      languages: [],
      tools: [],
      link: 'https://se.ruhr-uni-bochum.de/'
    },
    {
      from_date: new Date('2021-08-01'),
      to_date: this.current_date,
      title: 'Centiro',
      occupation: 'Software Developer',
      description: '',
      tech: [],
      languages: ['c#', '.net', 'python', 'typescript', 'kotlin', 'mongoDb', 'sql', 'bigquery-sql'],
      tools: ['git', 'azure devops', 'gcp'],
      link: 'https://centiro.com/'
    },
    {
      from_date: new Date('2021-01-01'),
      to_date: new Date('2021-07-31'),
      title: 'Chalmers University of Technology',
      occupation: 'Master Thesis',
      description: 'Conducted research on [topic] and developed a [solution/tool] to address [problem].',
      tech: ['Plugin Development', 'Intellij Platform'],
      languages: ['Java', 'Kotlin'],
      tools: [],
      link: ''
    },
    {
      from_date: new Date('2018-06-01'),
      to_date: new Date('2020-06-30'),
      title: 'Waya Finance & Technology',
      occupation: 'Junior Software Developer',
      description: '',
      tech: ['Full stack', 'Microservices'],
      languages: ['Java', 'SQL', 'C#', '.NET'],
      tools: [],
      link: 'https://www.waya.se/en/'
    },
    {
      from_date: new Date('2019-09-01'),
      to_date: new Date('2021-08-31'),
      title: 'Chalmers University of Technology',
      occupation: 'MSc Software Engineering',
      description: '',
      tech: [],
      languages: [],
      tools: [],
      link: 'https://www.chalmers.se/en/education/find-masters-programme/software-engineering-and-technology-msc/'
    },
    {
      from_date: new Date('2015-09-01'),
      to_date: new Date('2021-08-31'),
      title: 'Chalmers University of Technology',
      occupation: 'BSc Computer Engineering',
      description: '',
      tech: [],
      languages: [],
      tools: [],
      link: 'https://www.chalmers.se/utbildning/hitta-program/datateknik-hogskoleingenjor/'
    },
  ];

  ngOnInit() {
    this.sortTimelineEvents();
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

  toggleEvents() {
    this.showAllEvents = !this.showAllEvents;
    this.eventsToShow = this.showAllEvents ? this.timelineEvents.length : 3;
  }
}
