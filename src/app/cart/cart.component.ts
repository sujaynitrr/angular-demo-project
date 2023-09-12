import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { CartItem } from '../cart-item/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements DoCheck {
  constructor() {}

  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  ngDoCheck() {
    this.calculateTotalPrice();
  }

  addItem() {
    const newItem = { name: `Item ${this.cartItems.length + 1}`, price: 10 };
    this.cartItems.push(newItem);
  }

  removeItem() {
    if (this.cartItems.length > 0) {
      this.cartItems.pop();
    }
  }

  private calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce(
      (total, item) => total + item.price,
      0
    );
  }
}
