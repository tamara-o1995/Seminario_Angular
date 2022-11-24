import { Component } from '@angular/core';
import { Producto } from './Producto';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productos: Producto[] = [
    {
      imagen: 'assets/images/PinkFloyd.jpg',
      nombre: 'Remera Pink Floyd',
      talle: 'M',
      sexo: 'Hombre',
      precio: 4500,
      stock: 0,
      clearance: false,
    },
    {
      imagen: 'assets/images/RemeraArtic1680.jpg',
      nombre: 'Remera Arctic Monkeys',
      talle: 'S',
      sexo: 'Hombre',
      precio: 4500,
      stock: 10,
      clearance: true,
    },
  ];


  constructor() {

  }

  ngOnInit(): void {

  }

}

