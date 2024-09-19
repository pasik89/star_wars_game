import { ChangeDetectionStrategy, Component, computed, input, Input, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'lib-ui-select',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input() label = '';
  @Input() options: Signal<any> = signal([]);
}
