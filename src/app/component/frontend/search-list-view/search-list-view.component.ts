import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-search-list-view',
  templateUrl: './search-list-view.component.html',
  styleUrls: ['./search-list-view.component.css']
})
export class SearchListViewComponent implements OnInit {

  public user_data: any;

  constructor(public router: Router, public cookieService: CookieService, private readonly meta: MetaService) { 
      // this.user_data = JSON.parse(this.cookieService.get('user_details'))
    // console.log(this.user_data)

    this.meta.setTitle('ProBid Auto - Inventory Search');
    this.meta.setTag('og:description', 'Locate the Pre-Owned Car of your desire at the ProBid Auto Inventory using Basic, as well as Advanced, Search Parameters to make your Car Search easy and convenient, while also saving you loads of time, effort and money.');
    this.meta.setTag('twitter:description', 'Locate the Pre-Owned Car of your desire at the ProBid Auto Inventory using Basic, as well as Advanced, Search Parameters to make your Car Search easy and convenient, while also saving you loads of time, effort and money.');    
    this.meta.setTag('og:keyword', 'Search Pre-Owned Car Inventory, Search ProBid Auto Vehicle Inventory, Search ProBid Auto Inventory');
    this.meta.setTag('twitter:keyword', 'Search Pre-Owned Car Inventory, Search ProBid Auto Vehicle Inventory, Search ProBid Auto Inventory');
    this.meta.setTag('og:title', 'ProBid Auto - Inventory Search');
    this.meta.setTag('twitter:title', 'ProBid Auto - Inventory Search');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');


  }

  ngOnInit() {
  }

}
