import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
// import { environment } from '../../../../../environments/environment';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-add-edit-subscriber-group',
  templateUrl: './add-edit-subscriber-group.component.html',
  styleUrls: ['./add-edit-subscriber-group.component.css']
})
export class AddEditSubscriberGroupComponent implements OnInit {

  // public configAddEdit: any = {
  //   action: "add",
   
  //   //endpoint: "https://9v41bpikik.execute-api.us-east-1.amazonaws.com/dev/api/addorupdatedata",
  //   //  endpoint2: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
  //   // endpoint: environment.API_URL + 'addorupdatedata',
  //    endpoint: this.apiservice.serverUrl + 'addorupdatedata',
  //   source: "subscriptiongroupadd",
  //   condition: {},
  //   defaultData: null,
  //   jwtToken: this.cookieService.get('jwtToken'),
  //   callBack: "subscriber-group/list",
  //   userData: { id: "18801017007", name: "Admin" },
  //   defaultDataAlways: null,
  //   group_table:'subscriptiongroupadd',
  //   sender_table:'senders'

  
    
  // }  


  public configAddEdit: any = {
    action: "add",
    endpoint: this.apiservice.serverUrlDemo + 'addorupdatedata',
    source: "news_category",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "/newsletter-list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }


  constructor( private cookieService : CookieService, private activatedRoute : ActivatedRoute, public apiservice: ApiService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.subscriptiongroupData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}



