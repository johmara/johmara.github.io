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
      description: 'Currently working as a PhD student at the Chair of Software Engineering group headed by Prof. Thorsten Berger at Ruhr University Bochum. My research is focused on the development of tools to aid developers in automating the creation of variation points and creating and maintaining feature traceability. The research is conducted in collaboration with Centiro Solutions AB.',
      tech: [],
      languages: [],
      tools: [],
      link: 'https://se.ruhr-uni-bochum.de/',
      isHovered: false
    },
    {
      from_date: new Date('2021-08-01'),
      to_date: this.current_date,
      title: 'Centiro',
      occupation: 'Software Developer',
      description: 'Currently working as a software developer in a team that is responsible for the development of the finance product. The product is a cloud-based platform that is used to calculate and manage costs and invoicing. My main responsibilities include developing new features, fixing bugs, maintaining the codebase and driving the product forward. Additinally, I integrate research results from my ongoing PhD studies into the company as a whole.',
      tech: [],
      languages: ['c#', '.net', 'python', 'typescript', 'kotlin', 'mongoDb', 'sql', 'bigquery-sql'],
      tools: ['git', 'azure devops', 'google cloud platform'],
      link: 'https://centiro.com/',
      isHovered: false
    },
    {
      from_date: new Date('2021-01-01'),
      to_date: new Date('2021-07-31'),
      title: 'Chalmers University of Technology',
      occupation: 'Master Thesis',
      description: 'Conducted research on tools to aid developers in creating and maintaining feature traceability through a IntelliJ IDE plugin. The research questions were concerning how effective such a tool could be and future work is to explore the effectiveness of the tool in a longitudinal study with professional developers.',
      tech: ['Plugin Development', 'Intellij Platform'],
      languages: ['Java', 'Kotlin'],
      tools: [],
      link: 'assets/Publications/MSCThesis-Jansson-Martinsson.pdf',
      isHovered: false
    },
    {
      from_date: new Date('2018-06-01'),
      to_date: new Date('2020-06-30'),
      title: 'Waya Finance & Technology',
      occupation: 'Junior Software Developer',
      description: 'Worked as a junior software developer in a team that was responsible for the development of the company\'s core product. The product is a cloud-based platform that was used to manage debt collection and reminders notices. My main responsibilities included developing microservices to handle email notifications and plugins to integrate with VISMA and Fortnox.',
      tech: ['Full stack', 'Microservices'],
      languages: ['Java', 'SQL', 'C#', '.NET'],
      tools: [],
      link: 'https://www.waya.se/en/',
      isHovered: false
    },
    {
      from_date: new Date('2019-09-01'),
      to_date: new Date('2021-08-31'),
      title: 'Chalmers University of Technology',
      occupation: 'MSc Software Engineering',
      description: 'Studied the master program in Software Engineering and Technology at Chalmers University of Technology. The program focused on software development, software architecture, software testing, and software project management.',
      tech: [],
      languages: [],
      tools: [],
      link: 'https://www.chalmers.se/en/education/find-masters-programme/software-engineering-and-technology-msc/',
      isHovered: false
    },
    {
      from_date: new Date('2015-09-01'),
      to_date: new Date('2021-08-31'),
      title: 'Chalmers University of Technology',
      occupation: 'BSc Computer Engineering',
      description: 'Studied the bachelor program in Computer Engineering at Chalmers University of Technology. The program focused on computer engineering, software engineering, real-time systems and ethical aspects of computer engineering.',
      tech: [],
      languages: [],
      tools: [],
      link: 'https://www.chalmers.se/utbildning/hitta-program/datateknik-hogskoleingenjor/',
      isHovered: false
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
}
