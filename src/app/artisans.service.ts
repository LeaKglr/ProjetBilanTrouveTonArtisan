import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

export interface Artisans {
  name: string;
  note: number;
  specialty: string;
  location: string;
  category: string;
  about: string;
  email: string;
  website: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisansService {
  private dataUrl = 'assets/datas.json';

  constructor(private http: HttpClient) { }

  getTopArtisans(): Observable<Artisans[]> {
    return this.http.get<Artisans[]>(this.dataUrl).pipe(
      map(artisans => {
        artisans.sort((a,b) => b.note - a.note);
        return artisans.slice(0, 3);
      })
    )
  }

  getAllArtisans(): Observable<Artisans[]> {
    return this.http.get<Artisans[]>(this.dataUrl);
  }

  getArtisanByName(name: string): Observable<Artisans | undefined> {
    return this.http.get<Artisans[]>(this.dataUrl).pipe(
      map(artisans => artisans.find(artisan => artisan.name === name))
    );
  }

  searchArtisans(term: string): Observable<Artisans[]> {
    return this.http.get<Artisans[]>(this.dataUrl).pipe(
      map(artisans =>
        artisans.filter(
          artisan =>
            artisan.name.toLowerCase().includes(term.toLowerCase()) ||
            artisan.specialty.toLowerCase().includes(term.toLowerCase()) ||
            artisan.location.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }
}
