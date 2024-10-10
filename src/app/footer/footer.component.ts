import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  nom :string = "twin";
  clickMe() {
    console.log('Le bouton a été cliqué !');
  }

}
