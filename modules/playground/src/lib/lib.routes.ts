import { Route } from '@angular/router';

export const playgroundRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./playground/playground.component').then(c => c.PlaygroundComponent)
  },
];
