import { Component } from '@angular/core';
import { TimeLineComponent } from '../time-line/time-line.component';
import {SocialsComponent} from "../socials/socials.component";
import {MaterialModule} from "../material/material.module";
import {ProjectsComponent} from "../projects/projects.component";
import {PublicationsComponent} from "../publications/publications.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, TimeLineComponent, SocialsComponent, ProjectsComponent, PublicationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'johmara'

}
