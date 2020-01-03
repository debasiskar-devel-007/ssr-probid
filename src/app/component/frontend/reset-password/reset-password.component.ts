import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public logo: any = '../../assets/images/logo.png';
  public fromTitleName: any = 'Reset Password';
  // public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  public serverUrl: any = this.apiService.serverUrlDemo;
  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'usermanagement'
  };
  
  constructor(private readonly meta: MetaService, public apiService: ApiService) {
  
    this.meta.setTitle('ProBid Auto - Reset Password');
    this.meta.setTag('og:description', 'Choose from a variety of different models, makes, brands, etc. and find the best Reset Password of your choice. Take home a premium-quality pre-owned car at unbelievable prices.');
    this.meta.setTag('twitter:description', 'Choose from a variety of different models, makes, brands, etc. and find the best Reset Password of your choice. Take home a premium-quality pre-owned car at unbelievable prices.');
    this.meta.setTag('og:keyword', 'ProBid Auto, Used Cars for Sale in USA, Buy Used Cars USA, Used Car Dealership the USA');
    this.meta.setTag('twitter:keyword', 'ProBid Auto, Used Cars for Sale in USA, Buy Used Cars USA, Used Car Dealership the USA');
    this.meta.setTag('og:title', 'ProBid Auto - Reset Password');
    this.meta.setTag('twitter:title', 'ProBid Auto - Reset Password');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');

 }

  ngOnInit() {
  }

}
  
