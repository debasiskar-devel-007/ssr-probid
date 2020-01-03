import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public savedUrl: any = [];
  public savedId: any = [];
  public blogList: any;
  public indexval:any = 3;


  public ConfigData: any = [
    { type: 'facebook', link: 'https://SoureshBanerjee.com' },
    { type: 'twitter', link: 'https://google.com' },
    { type: 'linkedin', link: 'https://jasonwatmore.com' },
    { type: 'tumbler', link:'material.angular.io' }
  ];
public tokenVal: any;

  constructor(public activatedRoute: ActivatedRoute, public router:Router, public apiService: ApiService, public _http: HttpClient) {

    
  }



  blogdetail(val:any){
    // console.log(val)
    this.router.navigateByUrl('/blogdetail/' +val)
  }
  
  showMoreFunc(){
    this.indexval = this.indexval + 3;   
    // console.log(this.indexval);
  }

  ngOnInit() {

      // console.log(this.tokenVal.length)

    var data: any = {};
    
    data = {
      source:"blogs_view"
    }
    this.apiService.getDatalistWithToken(data, "datalistwithouttoken").subscribe((res:any)=>{

      this.blogList = res.res;
      // console.log(this.blogList)

    });
  }



}