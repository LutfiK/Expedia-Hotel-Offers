import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {OfferFilter} from './offerFilter';
import 'rxjs/add/operator/map';

@Injectable()
export class OffersService {

  constructor(private http: Http) { 
   }


  searchOffers(offerFilter) {
    var result = '';
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(offerFilter);

    return this.http.post('http://localhost:3000/offers/search/', offerFilter, headers) 
      .map(res => res.json());

}  

}
