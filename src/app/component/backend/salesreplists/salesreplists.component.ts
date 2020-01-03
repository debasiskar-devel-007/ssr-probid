import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-salesreplists',
  templateUrl: './salesreplists.component.html',
  styleUrls: ['./salesreplists.component.css']
})
export class SalesreplistsComponent implements OnInit {
    statusarray: any = [{val: 1, name: 'Active'}, {val: 0, name: 'pending'}, {val: 2, name: 'Inactive'}]; 

    pendingmodelapplicationarray: any = [];
  pendingmodelapplicationarray_skip: any = ['_id','password','timezone','webiner','username','zip','created_at','type','state','city','salesrep_id','salesrep_fullname'];
  pendingmodelapplicationarray_detail_skip: any = ['_id'];

    updateendpoint = 'addorupdatedata';
    deleteendpoint = 'deletesingledata';

    tablename = 'user';

    searchendpoint = 'datalist';
    editroute: any = 'editsalesrep';
    modify_header_array: any = {
      'fullname': "Name",
      'phone': "Phone",
      'email':"Email",
      'address':'Location',
      'date added':'Date',
      'companyname':'Company'
    };

     // this is use for  All type of search 
     search_settings:any={

      datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 

      textsearch:[{label:"Search By email",field:'email'},{label:"Search By Full name",field:'name'}],  // this is use for  text search

      search:[{label:"Search By autocomplete",field:'name'}]     // this is use for  Autocomplete search
  }

  constructor(public activatedRoute: ActivatedRoute, public router: Router,public apiService: ApiService) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{   
      console.log(data.salesreplist.res);
      this.pendingmodelapplicationarray=data.salesreplist.res;
    })
  }

}
