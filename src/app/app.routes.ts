import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PublicationsComponent} from "./publications/publications.component";
import {PublicationsListComponent} from "./publications-list/publications-list.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'home'},
  {path: 'home', component: HomeComponent},
  {path: 'publications', component: PublicationsListComponent},
];
