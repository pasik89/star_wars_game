import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@start-wars-game/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-start-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPageComponent {
  private _router: Router = inject(Router);

  navigateToPlayground() {
    this._router.navigate(['playground']);
  }
}
