import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AdvancedToken } from './app/advanced/Advanced';
import { Demo3Module } from './app/advanced/demo3/demo3.module';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const list = [
  { provide: AdvancedToken, useValue: Demo3Module }
];

platformBrowserDynamic(list).bootstrapModule(AppModule)
  .catch(err => console.error(err));
