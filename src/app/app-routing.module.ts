import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PagesLegalesComponent } from './pages-legales/pages-legales.component';
import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';

const routes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "mentionslegales", component: PagesLegalesComponent},
  {path: "accessibilite", component: PagesLegalesComponent},
  {path: "donneespersonnelles", component: PagesLegalesComponent},
  {path: "cookies", component: PagesLegalesComponent},
  {path: "ListeArtisans", component: ListeArtisansComponent},
  {path: 'category/:category', component: ListeArtisansComponent},
  {path: 'artisan/:name', component: FicheArtisanComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
