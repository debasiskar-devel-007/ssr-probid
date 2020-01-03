import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-birddog-list',
  templateUrl: './birddog-list.component.html',
  styleUrls: ['./birddog-list.component.css']
})
export class BirddogListComponent implements OnInit {
  
  statusarray: any = [{val: 1, name: 'Active'}, {val: 0, name: 'Pending'}, {val: 2, name: 'Inactive'}]; 
  

  public birdDogList: any = [];
  birdDogList_skip: any = ['_id','password','timezone','webiner','username','zip','created_at','type','state','city','salesrep_id','salesrep_fullname'];
birdDogList_detail_skip: any = ['_id'];

  updateendpoint = 'addorupdatedata';
  deleteendpoint = 'deletesingledata';
  tablename = 'user';
  searchendpoint = 'datalist';
  editroute: any = 'editbirddog';
  modify_header_array: any = {
    'fullname': "Name",
    'phone': "Phone",
    'email':"Email",
    'address':'Location',
    'date added':'Date',
    'companyname':'Company',
    
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
    this.birdDogList=data.birddoglist.res;
    console.log('>>>>>>',this.birdDogList);
  })
}

}
