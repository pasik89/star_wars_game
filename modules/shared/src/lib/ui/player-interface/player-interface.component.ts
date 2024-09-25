import { ChangeDetectionStrategy, Component, Input, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameTypesEnum } from '../../models/game-types.enum';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'lib-player-interface',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-interface.component.html',
  styleUrl: './player-interface.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerInterfaceComponent {
  @Input({ required: true }) public player: Signal<any> = signal(null);
  @Input({ required: true }) public gameType: Signal<GameTypesEnum | null> = signal(null);
  @Input({ required: true }) public isInverted: boolean = false;

  public gamePlayersType: typeof GameTypesEnum = GameTypesEnum;

  public convertToNumber(value: string): number {
    return coerceNumberProperty(value.replace(/,/g, '').replace(/-/g, ''));
  }
}
