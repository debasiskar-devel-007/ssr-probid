import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-listing-blogcat',
  templateUrl: './listing-blogcat.component.html',
  styleUrls: ['./listing-blogcat.component.css']
})
export class ListingBlogcatComponent implements OnInit {

  //Listing for blog category
  public blogListConfig: any = {
    apiBaseUrl:this.apiService.serverUrlDemo,
    listEndPoint: "datalist",
    datasource: [],
    tableName: "blog_category",
    updateurl: "addorupdatedata",
    editUrl: "blog-category/edit/",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "blog-category/add",
    view: "blog_category_view"

  }
  
  constructor(private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService) {
    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.blogListConfig.datasource = resolveData.blogCatList.res;
    //   this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
    // });
    let data: any = {
      source:"blog_category",
      endpoint: "datalist"
    }
    this.apiService.getDatalist(data).subscribe((result: any)=>{
      console.log(result.res);
      this.blogListConfig.datasource = result.res;
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
    });


  }

  ngOnInit() {


  }
}
