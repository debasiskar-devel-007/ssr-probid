import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, private readonly meta: MetaService) { 
    this.meta.setTitle('ProBid Auto - Car-Buying Made Easy!');
    this.meta.setTag('og:description', 'ProBid Auto offers the easiest and the most convenient way for car buyers to get their desired cars, listing Used Cars for Sale from multiple dealerships and major Auction houses around the USA.');
    this.meta.setTag('twitter:description', 'ProBid Auto offers the easiest and the most convenient way for car buyers to get their desired cars, listing Used Cars for Sale from multiple dealerships and major Auction houses around the USA.');
    this.meta.setTag('og:keyword', 'ProBid Auto, Used Cars for Sale in USA, Buy Used Cars USA, Used Car Dealership the USA');
    this.meta.setTag('twitter:keyword', 'ProBid Auto, Used Cars for Sale in USA, Buy Used Cars USA, Used Car Dealership the USA');
    this.meta.setTag('og:title', 'ProBid Auto - Car-Buying Made Easy!');
    this.meta.setTag('twitter:title', 'ProBid Auto - Car-Buying Made Easy!');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');
  }

  ngOnInit() { }
   
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

}
