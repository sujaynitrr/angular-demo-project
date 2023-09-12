import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CartItem } from './item.model';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnChanges {
  @Input() item: any;
  name: string = '';
  price: number = 0;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.name = changes[`item`]?.currentValue.name;
    this.price = changes[`item`]?.currentValue.price;
  }
}
