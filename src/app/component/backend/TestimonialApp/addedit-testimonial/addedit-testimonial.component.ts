import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-addedit-testimonial',
  templateUrl: './addedit-testimonial.component.html',
  styleUrls: ['./addedit-testimonial.component.css']
})
export class AddeditTestimonialComponent implements OnInit {
/* Config for add and edit start */


public configAddEdit: any = {
  action: "add",
  // endpoint: "https://63zzhpnoti.execute-api.us-east-1.amazonaws.com/production/api/addorupdatedata",
  endpoint: this.ApiService.serverUrlDemo + 'addorupdatedata',
  source: "testimonial",
  condition: {},
  defaultData: null,
  jwtToken: this.cookieService.get('jwtToken'),
  callBack: "testimonial-lists-admin",
  userData: { id: "18801017007", name: "Admin" },
}

public configData: any = {
  baseUrl: "http://3.15.236.141:5005/",
  endpoint: "uploads",
  size: "51200", // kb
  format: ["jpg", "jpeg", "png"], // use all small font
  type: "testimonial-image",
  path: "testimonial",
  prefix: "testimonial-image_"
}

/* Config for add and edit end */

  constructor( private router : Router , private activatedRoute : ActivatedRoute ,private cookieService : CookieService, public ApiService: ApiService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.testimonialData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }


}
