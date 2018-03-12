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
    
    //--->uncomment if running on local server
    //local service url
    var baseUrl = 'http://localhost:3000';
    
    //--->uncomment if running in heroku app
    //heroku service url
    //var baseUrl = 'https://expedia-server-app.herokuapp.com';

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(offerFilter);

    return this.http.post(baseUrl + '/offers/search/', offerFilter, headers)
      .map(res => res.json());

  }

}
