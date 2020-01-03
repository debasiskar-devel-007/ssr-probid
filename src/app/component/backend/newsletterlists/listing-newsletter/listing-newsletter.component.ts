import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listing-newsletter',
  templateUrl: './listing-newsletter.component.html',
  styleUrls: ['./listing-newsletter.component.css']
})
export class ListingNewsletterComponent implements OnInit {
  // public newsConfigForm: any = {
  //   apiUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
  //   listEndPoint: "datalist",
  //   datasource: "",
  //   tableName: "newsletters",
  //   updateurl: "addorupdatedata",
  //   editUrl: "newsletter/edit",
  //   jwtToken: "",
  //   deleteEndPoint: "deletesingledata",
  //   addLink: "/newsletter/add",
  //   view: ""

  // }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {

    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.newsConfigForm.datasource = resolveData.newsData.res;
    //   this.newsConfigForm.jwtToken = this.cookieService.get('jwtToken');

    // });
  }

  ngOnInit() {
  }

}