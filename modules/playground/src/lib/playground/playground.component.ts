import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  Signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonComponent, GameTypesEnum } from '@start-wars-game/shared';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'lib-playground',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent {
  private _router: Router = inject(Router);

  public selectOptions: Signal<any> = signal([GameTypesEnum.PEOPLE, GameTypesEnum.STARSHIPS]);
  public control: UntypedFormControl = new FormControl('aaa');

  public navigateToFightPage() {
    this._router.navigate(['playground', 'fight-page', this.control.value]);
  }
}
