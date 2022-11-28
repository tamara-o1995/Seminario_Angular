import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductListComponent } from './product-list/product-list.component';
import { Producto } from './product-list/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Producto[] = [];

  cartList: BehaviorSubject<Producto[]> = new BehaviorSubject(this._cartList);
  // cartList: BehaviorSubject<Producto[]> = new BehaviorSubject([]);
  constructor() { }

  addToCart(producto: Producto) {
    let item = this._cartList.find((v1) => v1.nombre == producto.nombre);
    if(!item){
      this._cartList.push({ ... producto});
    } else{
      item.quantity += producto.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
}
