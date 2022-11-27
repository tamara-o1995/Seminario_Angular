import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Producto } from './product-list/Producto';

const URL = 'https://6380f64a786e112fe1bf333a.mockapi.io/api/v1/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Producto[]> {

    return this.http.get<Producto[]>(URL).pipe(
      tap((productos: Producto[]) => productos.forEach(producto => producto.quantity = 0))
    );
  }
}
