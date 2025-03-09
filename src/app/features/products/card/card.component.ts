import { CurrencyPipe, SlicePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@features/products/product.interface';

import { AddToCartComponent } from '@shared/ui/add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, AddToCartComponent, CurrencyPipe, SlicePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  currentProduct = input.required<Product>({alias: 'product'});
  // *como se manejaba antes
  // @Output() addToCartEvent = new EventEmitter<Product>();

  // *ahora
  addToCartEvent = output<Product>();

  onAddToCart(): void {
    this.addToCartEvent.emit(this.currentProduct());
  }
}
