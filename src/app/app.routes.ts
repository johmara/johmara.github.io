import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PublicationsListComponent} from "./publications-list/publications-list.component";
import {TimeLineComponent} from "./time-line/time-line.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'home'},
  {path: 'home', component: HomeComponent},
  {path: 'resume', component: TimeLineComponent},
  {path: 'publications', component: PublicationsListComponent},
];
