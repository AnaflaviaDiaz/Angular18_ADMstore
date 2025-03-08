import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SpinnerService } from '@shared/services/spinner.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (isLoading$ | async) {
    <div class="flex-center">
      <div class="spinner"></div>
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  isLoading$ = inject(SpinnerService).isLoading$;
}
