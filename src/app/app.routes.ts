import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PublicationsListComponent} from "./publications-list/publications-list.component";
import {CvComponent} from "./cv/cv.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'publications', component: PublicationsListComponent},
  {path: 'cv', component: CvComponent},
  { path: '**', redirectTo: '' }  // Wildcard route for a 404 page
];
