import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-addedit-service',
  templateUrl: './addedit-service.component.html',
  styleUrls: ['./addedit-service.component.css']
})
export class AddeditServiceComponent implements OnInit {
  public configAddEdit: any = {
    action: "add",
    // endpoint: "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/addorupdatedata",
    endpoint: this.ApiService.serverUrlDemo + 'addorupdatedata',
    source: "services",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "service/list",
    userData: { id: "18801017007", name: "Admin" },
  }


  constructor(private router : Router , private activatedRoute : ActivatedRoute ,private cookieService : CookieService, public ApiService: ApiService) { }

 
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.serviceList.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}


