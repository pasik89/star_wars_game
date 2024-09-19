import { Route } from '@angular/router';

export const startPageRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./start-page/start-page.component').then(c => c.StartPageComponent)
  },
];
