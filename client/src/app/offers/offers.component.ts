import { Component, OnInit } from '@angular/core';
import {OffersService} from '../offers.service';
import {Http, Headers} from '@angular/http';
import { OfferFilter} from '../offerFilter';
import { Offer} from '../offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [OffersService]
})
export class OffersComponent implements OnInit {

  OfferFilter: OfferFilter;
  city: string;
  minStartDate: Date;
  maxStartDate: Date;

  offers: Offer[];


  constructor(private offersService: OffersService) {
    this.offers = new Array();
  }

  ngOnInit() {


  }


  SearchOffers() {
    console.log(this.city);
    console.log(this.minStartDate);
    console.log(this.maxStartDate);

    var filter = new OfferFilter();
    filter.city = this.city;
    filter.minStartDate = new Date(this.minStartDate);
    filter.maxStartDate = new Date(this.maxStartDate);

    this.offersService.searchOffers(filter).subscribe(
      response => {
        this.offers = [];
        console.log('Response:' + response);
        this.offers = response.slice();
        console.log('SearchOffers Result:' + JSON.stringify(this.offers));

      }
    );

  }


}
