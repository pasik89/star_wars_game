import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  Signal,
  DestroyRef,
  WritableSignal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, GameService, PlayerInterfaceComponent, GameTypesEnum } from '@start-wars-game/shared';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'lib-fight-page',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, ButtonComponent, PlayerInterfaceComponent],
  templateUrl: './fight-page.component.html',
  styleUrl: './fight-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FightPageComponent implements OnInit {
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _destroyRef: DestroyRef = inject(DestroyRef);
  private _gameService: GameService = inject(GameService);
  private _router: Router = inject(Router);

  public gamePlayers: WritableSignal<any> = signal({});
  public showFight: WritableSignal<boolean> = signal(false);
  public gameType: WritableSignal<GameTypesEnum | null> = signal(null);
  public playerOne: Signal<any | null> = signal(null);
  public playerTwo: Signal<any | null> = signal(null);

  public gamePlayersType: typeof GameTypesEnum = GameTypesEnum;
  public fightForm: UntypedFormGroup = new UntypedFormGroup({
    player1: new UntypedFormControl(''),
    player2: new UntypedFormControl(''),
  })


  public ngOnInit() {
    this._activatedRoute.data.pipe(
      takeUntilDestroyed(this._destroyRef)
    ).subscribe(
      data => {
        this.gamePlayers.set(data['gamePlayers']);
      }
    )

    this._activatedRoute.paramMap.pipe(
      takeUntilDestroyed(this._destroyRef)
    ).subscribe(
      data => {
        this.gameType.set(data.get('gameType') as GameTypesEnum);
      }
    )
    this.fightForm.get('player1')?.valueChanges.pipe(
      takeUntilDestroyed(this._destroyRef)
    ).subscribe(
      data => {
        this.playerOne = this.setPlayer(data.url)
      }
    )

    this.fightForm.get('player2')?.valueChanges.pipe(
      takeUntilDestroyed(this._destroyRef)
    ).subscribe(
      data => {
        this.playerTwo = this.setPlayer(data.url)
      }
    )
  }

  setPlayer(url: string): Signal<any> {
      return toSignal(this._gameService.getPlayer(url), {
        injector: this._gameService,
        initialValue: null,
        manualCleanup: true,
      })
  }

  public showFightView(value: boolean) {
    this.showFight.set(value);
  }

  public convertToNumber(value: string): number {
    return coerceNumberProperty(value.replace(/,/g, ''));
  }

  public backToSelectGame(): void {
    this._router.navigate(['playground']);
  }
}
