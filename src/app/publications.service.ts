import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from './models/publication.model';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  private jsonUrl = 'assets/publications/publications.json';

  constructor(private http: HttpClient) {}

  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.jsonUrl);
  }
}
