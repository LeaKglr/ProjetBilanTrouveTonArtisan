import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { PagesLegalesComponent } from './pages-legales/pages-legales.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FicheArtisanComponent,
    FooterComponent,
    HeaderComponent,
    ListeArtisansComponent,
    PageErreurComponent,
    PagesLegalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
