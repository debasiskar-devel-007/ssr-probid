import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public userType: any = 'admin';
  public logo: any = '../../assets/images/logo.png';
  public modaleLogo: any = '../../assets/images/logo.png';
  public forgetRouteingUrl: any = 'forget-password';
  public loginRouteingUrl: any = 'login';

  public formTitle: any = 'Sign Up';
  // public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  public serverUrl: any = this.apiService.serverUrlDemo;
  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'user'
  };
  constructor(private readonly meta: MetaService, public apiService: ApiService) {
    
    this.meta.setTitle('ProBid Auto - Admin Sign Up');
    this.meta.setTag('og:description', 'ProBid Testimonials, BroBid Auto Customer Reviews, ProBid Auto User Reviews');
    this.meta.setTag('twitter:description', 'Check out what our Customers and Sales Reps have to say about ProBid Auto. Customer reviews that will help you to understand the convenient ways in which we get you the Pre-Owned Vehicles you desire');
    this.meta.setTag('og:keyword', 'ProBid Auto SignUp, Sign Up With ProBid Auto, Join ProBid Auto');
    this.meta.setTag('twitter:keyword', 'ProBid Auto SignUp, Sign Up With ProBid Auto, Join ProBid Auto');
    this.meta.setTag('og:title', 'ProBid Auto - Admin Sign Up');
    this.meta.setTag('twitter:title', 'ProBid Auto - Admin Sign Up');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');

}

  ngOnInit() {
  }

}
