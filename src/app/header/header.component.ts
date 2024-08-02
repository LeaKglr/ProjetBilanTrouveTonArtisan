import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  liens = [
    {categorie: "Bâtiment", route: '/category/bâtiment'},
    {categorie: "Services", route: '/category/services'},
    {categorie: "Fabrication", route: '/category/fabrication'},
    {categorie: "Alimentation", route: '/category/alimentation'}
  ]
}
