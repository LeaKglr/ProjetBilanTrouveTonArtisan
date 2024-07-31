import { Component } from '@angular/core';
import { ArtisansService, Artisans } from '../artisans.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchTerm: string = '';
  artisans$: Observable<Artisans[]> | undefined;

  constructor(private artisansService: ArtisansService) {}

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.artisans$ = this.artisansService.searchArtisans(this.searchTerm).pipe(
        catchError(error => {
          console.error('Error fetching artisans:', error);
          return of([]);
        })
      );
    } else {
      this.artisans$ = undefined;
    }
  }

  getStars(note:number): boolean[] {
    return Array(5).fill(false).map((_,i) => i < note);
  }
}
