import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('ProBid Auto - Who We Are');
    this.meta.setTag('og:description', 'Revolutionizing the Online Auto Industry, ProBid Auto has re-invented the art of Buying and Selling Pre-Owned Vehicles Online, making it easier and more convenient for buyers to get the cars of their choices.');
    this.meta.setTag('twitter:description', 'Revolutionizing the Online Auto Industry, ProBid Auto has re-invented the art of Buying and Selling Pre-Owned Vehicles Online, making it easier and more convenient for buyers to get the cars of their choices.');

    this.meta.setTag('og:keyword', 'ProBid Auto, Buying Pre-Owned Vehicles Online, Selling Pre-Owned Vehicles Online');
    this.meta.setTag('twitter:keyword', 'ProBid Auto, Buying Pre-Owned Vehicles Online, Selling Pre-Owned Vehicles Online');

    this.meta.setTag('og:title', 'ProBid Auto - Who We Are');
    this.meta.setTag('twitter:title', 'ProBid Auto - Who We Are');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');
   }

  ngOnInit() {
  }

}
