import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-pre-owned',
  templateUrl: './pre-owned.component.html',
  styleUrls: ['./pre-owned.component.css']
})
export class PreOwnedComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('ProBid Auto - Pre-Owned Cars');
    this.meta.setTag('og:description', 'Choose from a variety of different models, makes, brands, etc. and find the best Pre-Owned Cars of your choice. Take home a premium-quality pre-owned car at unbelievable prices.');
    this.meta.setTag('twitter:description', 'Choose from a variety of different models, makes, brands, etc. and find the best Pre-Owned Cars of your choice. Take home a premium-quality pre-owned car at unbelievable prices.');    
    this.meta.setTag('og:keyword', 'Pre-Owned Cars for Sale, Premium Pre-Owned Cars, Buy Pre-Owned Cars USA');
    this.meta.setTag('twitter:keyword', 'Pre-Owned Cars for Sale, Premium Pre-Owned Cars, Buy Pre-Owned Cars USA');
    this.meta.setTag('og:title', 'ProBid Auto - Pre-Owned Cars');
    this.meta.setTag('twitter:title', 'ProBid Auto - Pre-Owned Cars');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');
   }

  ngOnInit() {
  }

}
