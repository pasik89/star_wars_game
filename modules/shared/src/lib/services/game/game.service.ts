import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _http: HttpClient = inject(HttpClient);

  get() {
    return this._http.get('https://www.swapi.tech/api/people');
  }

  getGamePlayers(player: string | null) {
    return this._http.get(`https://www.swapi.tech/api/${player}`);
  }

  getPlayer(url: string | null) {
    return this._http.get(`${url}`);
  }
}
