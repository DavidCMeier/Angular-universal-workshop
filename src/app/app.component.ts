import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularUniversalWorkshop';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    console.log('Estamos en:', this.platformId);
    if (isPlatformBrowser(this.platformId)) {
      console.log(window.location.href);
    } else {
      console.log('Estamos en el servidor y no tenemos disponible la propiedad del navegador window');
    }
  }
}
