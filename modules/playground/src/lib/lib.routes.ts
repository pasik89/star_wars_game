import { Route } from '@angular/router';
import { fightResolver } from './resolvers/fight.resolver';

export const playgroundRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./playground/playground.component').then(c => c.PlaygroundComponent),
  },
  {
    path: 'fight-page/:gameType',
    loadComponent: () => import('./fight-page/fight-page.component').then(c => c.FightPageComponent),
    resolve: {
      gamePlayers: fightResolver
    }
  }
];
