import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { GameService } from '@start-wars-game/shared';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const fightResolver: ResolveFn<Observable<any>> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(GameService).getGamePlayers(route.paramMap.get('gameType'))
}
