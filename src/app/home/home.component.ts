import { Component } from '@angular/core';
import {SocialsComponent} from "../socials/socials.component";
import {ProjectsComponent} from "../projects/projects.component";
import {PublicationsComponent} from "../publications/publications.component";
import { TimeLineComponent } from '../time-line/time-line.component';
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TimeLineComponent, SocialsComponent, ProjectsComponent, PublicationsComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'johmara'

}