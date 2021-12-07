import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { News } from './news';

@Injectable()
export class NewsService {


    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('http://203.158.101.9/otops/api/product')
        .toPromise()
        .then(res => <News[]>res)
        .then(data => { return data; });
    }

    getNewsID(id:any){
      return this.http.get<any>('http://203.158.101.9/otops/api/product/'+id)
      .toPromise()
      .then(res => <News[]>res)
      .then(data => { return data; });
    }


}
