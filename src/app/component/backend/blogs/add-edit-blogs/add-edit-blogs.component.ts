import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-add-edit-blogs',
  templateUrl: './add-edit-blogs.component.html',
  styleUrls: ['./add-edit-blogs.component.css']
})
export class AddEditBlogsComponent implements OnInit {


  server: any =this.apiService.serverUrlDemo;
  addUrl: any = 'addorupdatedata';
  getDataUrl: any= 'datalist';
  public editdata: any = [];
  action:any="add";
  listURL:any="blog-management";


  public configData: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "blogs-image",
    path: "blogs",
    prefix: "blogs-image_"
  }

  public configFileData: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["pdf", "doc", "docx","docxx"], // use all small font
    type: "blogs-file",
    path: "blogs",
    prefix: "blogs-file"
  }
  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute,public apiService: ApiService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {         
          this.editdata= resolveData.blogsList.res[0];  
          this.action="edit";    
        });
      }
    });
  }

}
