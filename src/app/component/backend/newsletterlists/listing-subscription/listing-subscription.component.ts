import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listing-subscription',
  templateUrl: './listing-subscription.component.html',
  styleUrls: ['./listing-subscription.component.css']
})
export class ListingSubscriptionComponent implements OnInit {

   /************** lib list setup start here *************/
  //  public subscriptionForm: any = {
  //   apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
  //   listEndPoint: "datalist",
  //   datasource: "",
  //   tableName: "subscriptions",
  //   updateurl: "addorupdatedata",
  //   editUrl: "newsletter/add-group/edit/",
  //   jwtToken: "",
  //   deleteEndPoint: "deletesingledata",
  //   addLink: "",
  //   view: "subscriptions"

  // }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {

    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.subscriptionForm.datasource = resolveData.subscriptionData.res;
    //   this.subscriptionForm.jwtToken = this.cookieService.get('jwtToken');

    // });
  }

  ngOnInit() {
  }

}