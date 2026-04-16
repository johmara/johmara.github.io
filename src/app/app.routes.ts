import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PublicationsListComponent} from "./publications-list/publications-list.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'publications', component: PublicationsListComponent},
  { path: '**', redirectTo: '' }  // Wildcard route for a 404 page
];
