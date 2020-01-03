import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-listing-subcategory',
  templateUrl: './listing-subcategory.component.html',
  styleUrls: ['./listing-subcategory.component.css']
})
export class ListingSubcategoryComponent implements OnInit {
  /************** lib list setup start here *************/
  // public subscriptionCatForm: any = {
  //   apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
  //   listEndPoint: "datalist",
  //   datasource: "",
  //   tableName: "resources",
  //   updateurl: "addorupdatedata",
  //   editUrl: "newsletter/list-category/edit",
  //   jwtToken: "",
  //   deleteEndPoint: "deletesingledata",
  //   addLink: "/newsletter/list-category/add",
  //   view: "news_category_view"

  // }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {

    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.subscriptionCatForm.datasource = resolveData.subscriptionListData.res;
    //   this.subscriptionCatForm.jwtToken = this.cookieService.get('jwtToken');

    // });
  }

  ngOnInit() {
  }

}
