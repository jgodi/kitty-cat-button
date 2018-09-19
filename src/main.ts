import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { KittyCatButtonModule } from './app/kitty-cat-button.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(KittyCatButtonModule)
  .catch(err => console.log(err));
