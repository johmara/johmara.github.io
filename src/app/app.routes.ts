import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PublicationsListComponent} from "./publications-list/publications-list.component";
import {StopwatchComponent} from "./stopwatch/stopwatch.component";
import {ConferenceDeadlinesComponent} from "./conference-deadlines/conference-deadlines.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'publications', component: PublicationsListComponent},
  {path: 'stopwatch', component: StopwatchComponent},
  {path: 'conference-deadlines', component: ConferenceDeadlinesComponent},
  { path: '**', redirectTo: '' }  // Wildcard route for a 404 page
];
