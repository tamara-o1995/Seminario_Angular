import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Producto } from '../product-list/Producto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent{

  cartList$: Observable<Producto[]>;
  constructor(private cart: ProductCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
}
