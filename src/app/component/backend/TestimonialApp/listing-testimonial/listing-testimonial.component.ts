import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-listing-testimonial',
  templateUrl: './listing-testimonial.component.html',
  styleUrls: ['./listing-testimonial.component.css']
})
export class ListingTestimonialComponent implements OnInit {


  /************** lib list setup start here *************/
  public testimonialListConfig:any = {
    // apiBaseUrl: "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/",
    apiBaseUrl: this.ApiService.serverUrlDemo,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "testimonial_view",
    updateurl: "addorupdatedata",
    editUrl: "testimonial/edit",
    jwtToken: this.ApiService.accesstoken,
    deleteEndPoint: "deletesingledata",
    addLink: "/testimonial/add",
    view: "testimonial_view"
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public ApiService: ApiService) { 

  this.activatedRoute.data.subscribe(resolveData => {
    this.testimonialListConfig.datasource = resolveData.testimonialList.res;
    this.testimonialListConfig.jwtToken = this.cookieService.get('jwtToken');
    
  });
}

  ngOnInit() {
  }

}
