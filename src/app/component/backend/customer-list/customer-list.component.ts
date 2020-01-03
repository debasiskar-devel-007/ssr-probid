import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public userDetails:any;
  public userType:any;
  public datalist:any

  constructor(public activatedRoute: ActivatedRoute, public router: Router,public apiService: ApiService , public cookieService:CookieService) { 
    this.userDetails = JSON.parse(this.cookieService.get('user_details'));
    this.userType=this.userDetails.type;
  }
  public statusarray: any = [{val: 1, name: 'Active'}, {val: 0, name: 'Pending'}, {val: 2, name: 'Inactive'}]; 

  pendingmodelapplicationarray: any = [];
  pendingmodelapplicationarray_skip: any = ['_id','type','city','state','password','zip','salesrep_id','created_at','id','salesrep','updated_at'];
  pendingmodelapplicationarray_detail_skip: any = ['_id'];
  updateendpoint = 'addorupdatedata';
  deleteendpoint = 'deletesingledata';
  tablename = 'user';
  searchendpoint = 'datalist';
  editroute: any = 'editcustomer';
  modify_header_array: any = {
    'fullname': "Name",
    'phone': "Phone",
    'email':"Email",
    'address':'Location',
    'date added':'Date',
    'status':'status',
    'salesrep_fullname':'Salesrep Name'
  };

   // this is use for  All type of search 
   search_settings:any={

    datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 

    textsearch:[{label:"Search By email",field:'email'},{label:"Search By Full name",field:'name'}],  // this is use for  text search

    search:[{label:"Search By autocomplete",field:'name'}]     // this is use for  Autocomplete search
}
  ngOnInit() {

    this.activatedRoute.data.forEach(data=>{   
      this.pendingmodelapplicationarray=data.customerlist.res;
      console.log('data>>',this.pendingmodelapplicationarray);
    })

   

  }

}
