import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import {map} from 'rxjs/operators';
import {Product} from '../Models/product';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private apiUrl ='https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  //http client
  // map rxjs model mapping 

  getProduct(): Observable<Product[]>{
    return this.http.get<{products:Product[]}>(this.apiUrl).pipe(
      map(response => response.products)
    )
  }
  
}
