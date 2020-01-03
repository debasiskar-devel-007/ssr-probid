import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logo: any = '../../assets/images/logo.png';      // logo url 
  public fromTitle: any = "Login";    // This is a From Title 
  public fullUrl: any = this.apiService.serverUrlDemo;
  public endpoint: any = "login";  // login endpoint
  public buttonName: any = 'Login';
  public signUpRouteingUrl: any = {
    "path": "sign-up",
    "buttonName": "sign-up",
    "customLink": "",
    "customURl": ""
  };

  public forgetRouteingUrl: any = {
    "path": "forget-password",
    "buttonName": "forget-password",
    "customLink": "",
    "customURl": ""
  };
  public routerStatus: any;
  public userData: any = {};
  public defaultLoginUrl = '/login';
  constructor(private readonly meta: MetaService, public apiService: ApiService, public router: Router, public cookieService: CookieService) {


    this.meta.setTitle('ProBid Auto - Login');
    this.meta.setTag('og:description', 'ProBid Auto offers the easiest and the most convenient way for car buyers to get their desired cars, listing Used Cars for Sale from multiple dealerships and major Auction houses around the USA.');
    this.meta.setTag('twitter:description', 'ProBid Auto offers the easiest and the most convenient way for car buyers to get their desired cars, listing Used Cars for Sale from multiple dealerships and major Auction houses around the USA.');
    this.meta.setTag('og:keyword', 'ProBid Auto, Used Cars for Sale in USA, Buy Used Cars USA, Used Car Dealership the USA');
    this.meta.setTag('twitter:keyword', 'ProBid Auto, Used Cars for Sale in USA, Buy Used Cars USA, Used Car Dealership the USA');
    this.meta.setTag('og:title', 'ProBid Auto - Login');
    this.meta.setTag('twitter:title', 'ProBid Auto - Login');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');


    this.routerStatus = {           // this is use for if login succcess then navigate which page 
      "data": [
        {
          "type": "admin",
          "routerNav": "admin-dashboard"
        },
        {
          "type": "customer",
          "routerNav": "customer-dashboard"
        },
        {
          "type": "salesrep",
          "routerNav": "rep-dashboard"
        },
      ]
    }

  }

  ngOnInit() {
    // console.log(this.apiService.serverUrlDemo)
  }
}
