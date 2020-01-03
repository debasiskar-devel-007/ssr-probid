import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bk-footer',
  templateUrl: './bk-footer.component.html',
  styleUrls: ['./bk-footer.component.css']
})
export class BkFooterComponent implements OnInit {

  public user_data: any;
  public userCookies: any;
  public userid: any = '';
  
  constructor(public cookieService: CookieService, public router: Router, public activeroute: ActivatedRoute ) {
    this.user_data = JSON.parse(this.cookieService.get('user_details'))
    // console.log( 'koushik',  this.user_data)
    // console.log(this.router.url)
    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
      this.userCookies = JSON.parse(this.cookieService.get('user_details'));
    }
    
   }

  ngOnInit() {
    
  }

}
