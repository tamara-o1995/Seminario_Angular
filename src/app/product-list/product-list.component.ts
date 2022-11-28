import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Producto } from './Producto';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  
  productos: Producto[] = [];

  constructor(
    private cart: ProductCartService, 
    private productsDataServece: ProductDataService) {
  }

  ngOnInit(): void {
    this.productsDataServece.getAll()
    .subscribe(productos => this.productos = productos);
  }

  maxReached(m: string){
    alert(m);
  }

  addToCart(producto: Producto): void{
    this.cart.addToCart(producto);
    producto.stock -= producto.quantity;
    producto.quantity = 0;
  }

}

