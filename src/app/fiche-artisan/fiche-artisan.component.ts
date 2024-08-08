import { Component, OnInit } from '@angular/core';
import { Artisans, ArtisansService } from '../artisans.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fiche-artisan',
  templateUrl: './fiche-artisan.component.html',
  styleUrl: './fiche-artisan.component.scss'
})
export class FicheArtisanComponent implements OnInit {
  artisan: Artisans | undefined;
  private routeSub: Subscription | null = null;
  isSubmitted = false;
  hasError = false;
  formtitle = "Formulaire de contact";
  category: string | null = null;
  filteredArtisans: Artisans[] = [];

  constructor (
    private route: ActivatedRoute, 
    private artisansService: ArtisansService) {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitted = true;
      this.hasError = false;
      form.resetForm();
    } else {
      this.hasError = true;
    }
  }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(async params => {
      const name = params.get('name');
      this.category = params.get('category');
      if (name) {
        this.artisan = await firstValueFrom(this.artisansService.getArtisanByName(name));
      }
    });
  }

  getStars(note:number): boolean[] {
    return Array(5).fill(false).map((_,i) => i < note);
  }
}
