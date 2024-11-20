import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Project} from "../models/project.model";
import {ProjectsService} from "../projects.service";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) {
  }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  isEmpty(value: string): boolean {
    return value === null || value.trim().length === 0;
  }
}
