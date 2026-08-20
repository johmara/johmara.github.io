import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SocialsComponent} from "../socials/socials.component";
import {ProjectsComponent} from "../projects/projects.component";
import {PublicationsComponent} from "../publications/publications.component";
import {NgOptimizedImage} from "@angular/common";
import {PublicationsService} from '../publications.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SocialsComponent, ProjectsComponent, PublicationsComponent, NgOptimizedImage],
  providers: [PublicationsService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'johmara'

}
