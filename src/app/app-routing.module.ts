import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PagesLegalesComponent } from './pages-legales/pages-legales.component';

const routes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "mentionslegales", component: PagesLegalesComponent},
  {path: "accessibilite", component: PagesLegalesComponent},
  {path: "donneespersonnelles", component: PagesLegalesComponent},
  {path: "cookies", component: PagesLegalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
