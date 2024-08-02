import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  telephone = "+33 (0)4 26 73 40 00";
  cs = "CS 20033";
  rue = "101 cours Charlemagne";
  ville = "69269 LYON CEDEX 02";
  pays = "France";

  pageslegales : {name: string}[] =  [
    {name: "Mentions Légales"},
    {name: "Données personnelles"},
    {name: "Accessibilité"},
    {name: "Cookies"}
  ]
}
