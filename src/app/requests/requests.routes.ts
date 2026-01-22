import { Routes } from '@angular/router';

export const REQUESTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./requests').then(m => m.Requests)
  }
];
