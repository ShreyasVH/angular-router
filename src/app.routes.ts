import { Routes } from '@angular/router'; // CLI imports router

import { Home } from './app/home/home';
import { Page1 } from './app/page1/page1';
import { Page2 } from './app/page2/page2';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'page1', component: Page1 },
    { path: 'page2', component: Page2 }
]; // sets up routes constant where you define your routes
