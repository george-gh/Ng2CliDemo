import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { DemoCliAppComponent, environment } from './app/';
// import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import {ROUTER_PROVIDERS} from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(DemoCliAppComponent, [ROUTER_PROVIDERS]);

// bootstrap(DemoCliAppComponent, [FIREBASE_PROVIDERS, defaultFirebase('https://httpdemo-7d4be.firebaseio.com'), ROUTER_PROVIDERS]);

