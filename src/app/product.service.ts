import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product : any = [];
  baseUrl = './assets';

  constructor(private http : HttpClient) { }

  getProductInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/product.json`).pipe(map((res) => {
      this.product = res;
      return this.product;
    }),
    catchError(this.errorHandler)
    )
  }

  errorHandler(error : HttpErrorResponse) {
    console.error(error);
    return throwError("Error");
  }
}
