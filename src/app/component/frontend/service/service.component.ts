import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public ServiceListArray:any=[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private readonly meta: MetaService) { 
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
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data.serviceListData.res;
      this.ServiceListArray=result;
      // console.log("ojjjjjjjjhgdfhgdf",this.ServiceListArray);   
    })
  }

  btnClick= function () {
    this.router.navigateByUrl('/servicelist');
  };

}
