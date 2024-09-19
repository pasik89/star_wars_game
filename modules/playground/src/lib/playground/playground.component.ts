import {
  ChangeDetectionStrategy,
  Component, computed,
  inject,
  OnInit,
  signal,
  Signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService, SelectComponent } from '@start-wars-game/shared/ui';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-playground',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, SelectComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent implements OnInit {
  private _gameService: GameService = inject(GameService);
  options: Signal<any> = signal([]);
  computedOptions: Signal<any> = computed(() => this.options().results);

  public ngOnInit() {
    this.options = toSignal(this._gameService.get(), {
      injector: this._gameService,
      manualCleanup: true,
      initialValue: [],
    });
  }
}
