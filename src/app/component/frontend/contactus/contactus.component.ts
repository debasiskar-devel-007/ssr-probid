import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  public formTitle: any = "Contact Us";      // Enter the Forl Title
  public pageUrl: any = 'home';
  public modaleLogo: any = '';
  // public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  public serverUrl: any = this.ApiService.serverUrlDemo; 

  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'contactusForm',
    token:1
  };
  public getDataUrl: any = 'datalist';
  public routeingUrl: any = 'dashboard';

  constructor(private readonly meta: MetaService, public ApiService: ApiService) {
    
    // this.meta.setTitle('Contact Us');
    // this.meta.setTag('og:description', 'This is dynamic decription ');
    // this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    // this.meta.setTag('og:type', 'website');
    // this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');

    this.meta.setTitle('ProBid Auto - Contact Us');
    this.meta.setTag('og:description', 'Contact Us with any queries and questions you may have about your Pre-Owned Vehicle purchase or sale and our Reps at ProBid Auto would be happy to answer your queries right away!');
    this.meta.setTag('twitter:description', 'Contact Us with any queries and questions you may have about your Pre-Owned Vehicle purchase or sale and our Reps at ProBid Auto would be happy to answer your queries right away!');
    this.meta.setTag('og:keyword', 'ProBid Auto Contact Us, Contact Us ProBid Auto');
    this.meta.setTag('twitter:keyword', 'ProBid Auto Contact Us, Contact Us ProBid Auto');
    this.meta.setTag('og:title', 'ProBid Auto - Contact Us');
    this.meta.setTag('twitter:title', 'ProBid Auto - Contact Us');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');

  }

  ngOnInit() {
  }

}
