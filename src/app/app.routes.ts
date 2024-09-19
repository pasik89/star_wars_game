import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@star_wars_game/start-page-lib').then((r) => r.startPageRoutes),
  },
  {
    path: 'playground',
    loadChildren: () =>
      import('@star_wars_game/playground').then((r) => r.playgroundRoutes),
  }
];
