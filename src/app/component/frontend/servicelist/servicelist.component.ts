import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ApiService } from '../../../api.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {

  private indexvallength:any;
  public ServiceListArray:any=[];
  // showMore = false;
  showme=true;
  public indexval:any = 13;
  public serv_list:any = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router,public apiService: ApiService, private readonly meta: MetaService) { 
    this.meta.setTitle('ProBid Auto - Services');
    this.meta.setTag('og:description', 'Multiple features, Competitive pricing and the simplest of Dashboards make it extremely easy for Sales Reps and Buyers to work together in getting the Pre-Owned Cars of their choice.');
    this.meta.setTag('twitter:description', 'Multiple features, Competitive pricing and the simplest of Dashboards make it extremely easy for Sales Reps and Buyers to work together in getting the Pre-Owned Cars of their choice.');
    this.meta.setTag('og:keyword', 'Pre-Owned Car Sales Service, Pre-Owned Car Buying Services');
    this.meta.setTag('twitter:keyword', 'Pre-Owned Car Sales Service, Pre-Owned Car Buying Services');
    this.meta.setTag('og:title', 'ProBid Auto - Services');
    this.meta.setTag('twitter:title', 'ProBid Auto - Services');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');
  }

  ngOnInit() {
   //********service list view*******IU//
    this.activatedRoute.data.forEach((data:any)=>{
      console.log(data)

      this.ServiceListArray=data.serviceListData.res; 
      console.log('>>>>>>>>>>>',this.ServiceListArray) 
      if(this.serv_list==''){
               this.serv_list=this.ServiceListArray[8];
             }   
     this.indexvallength = this.ServiceListArray.length;
    })
    
  }

  btnBackClick= function () {
    this.router.navigateByUrl('service');
  };
  

  showMoreFunc(){
    this.indexval = this.indexval + 3;   
    console.log(this.indexval);
  }
//service list data display
  servicelist(val: any){
  // console.log(val)
  this.serv_list=val;
  console.log(this.serv_list)
  
  }

}
