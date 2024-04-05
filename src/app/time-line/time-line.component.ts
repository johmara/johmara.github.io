import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGraduationCap, faSpinner} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.scss'
})
export class TimeLineComponent {
  current_date = new Date(Date.now())
  timelineEvents = [
    {
      from_date: new Date('2021-08-16'),
      to_date: this.current_date,
      title: 'Centiro',
      occupation: 'Software Developer',
      description: '',
      tech: [],
      languages: ['c#', '.net', 'python', 'typescript', 'kotlin', 'mongoDb', 'sql', 'bigquery-sql'],
      tools: ['git', 'azure devops', 'gcp'],
      icon: faSpinner,
    },
    {
      from_date: new Date('2020-12-07'),
      to_date: new Date('2021-06-15'),
      title: 'Chalmers University of Technology',
      occupation: 'Master Thesis',
      description: '',
      tech: [],
      languages: [],
      tools: [],
      icon: faGraduationCap
    },
  ];

  subtractYearDate(from_date: Date, to_date: Date): any {
    return to_date.getFullYear() - from_date.getFullYear();
  }

  isCurrent(from_date: Date, to_date: Date): boolean {
    return 0 == to_date.getFullYear() - from_date.getFullYear();
  }
}
