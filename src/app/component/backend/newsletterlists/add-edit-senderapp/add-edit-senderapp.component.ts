import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-add-edit-senderapp',
  templateUrl: './add-edit-senderapp.component.html',
  styleUrls: ['./add-edit-senderapp.component.css']
})
export class AddEditSenderappComponent implements OnInit {

  // public configAddEdit: any = {
  //   action: "add",
  //   // endpoint: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/addorupdatedata",
  //   // endpoint2:"https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",

  //   endpoint: this.ApiService.serverUrl + 'addorupdatedata',
  //   endpoint2 : this.ApiService.serverUrl,

  //   source: "senders",
  //   condition: {},
  //   defaultData: null,
  //   jwtToken: this.cookieService.get('jwtToken'),
  //   callBack: "newsletter-list",
  //   userData: { id: "18801017007", name: "Admin" },
  //   defaultDataAlways: null
  // }


  public configAddEditSender: any = {
    action: "add",
    endpoint: this.ApiService.serverUrlDemo + 'addorupdatedata',
    endpoint2 : this.ApiService.serverUrlDemo,
    source: "senders",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "/newsletter-list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }

  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute, public ApiService: ApiService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params._id)
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          console.log(resolveData)
          this.configAddEditSender.defaultData = resolveData.eventList.res;
          this.configAddEditSender.action = "edit";
          this.configAddEditSender.condition = { id: params._id };
        });
      }
    });
  }

}