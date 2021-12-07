import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { product } from './product';

@Injectable()
export class ProductService {



  constructor(private http: HttpClient) { }

  getProductsSmall() {
    return this.http.get<any>('http://203.158.101.9/otops/api/product')
      .toPromise()
      .then(res => <product[]>res)
      .then(data => { return data; });
  }

  getProductsID(id: any) {
    return this.http.get<any>('http://203.158.101.9/otops/api/product/' + id)
      .toPromise()
      .then(res => <product[]>res)
      .then(data => { return data; });
  }

  setView(id:any) {
    return this.http.post<any>(`http://203.158.101.9/otops/api/product/${id}`, null)

  }

}
