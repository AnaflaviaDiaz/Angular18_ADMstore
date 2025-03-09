import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Input,
  Output,
} from '@angular/core';

type AddToCartConfig = Record<'text', string>;

const DEFAULT_ADD_TO_CART_TEXT = 'Add to cart';

const defaultConfig: AddToCartConfig = {
  text: DEFAULT_ADD_TO_CART_TEXT,
} as const;

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="onAddToCart()" class="btn">
      {{ config().text }}
    </button>
  `,
  styleUrl: './add-to-cart.component.scss',
})
export class AddToCartComponent {
  config = input<AddToCartConfig>(defaultConfig);
  @Output() addToCartEvent = new EventEmitter<void>();

  onAddToCart(): void {
    this.addToCartEvent.emit();
  }
}
