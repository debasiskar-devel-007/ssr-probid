import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-add-edit-testemail',
  templateUrl: './add-edit-testemail.component.html',
  styleUrls: ['./add-edit-testemail.component.css']
})
export class AddEditTestemailComponent implements OnInit {
  public configAddEdit: any = {
    action: "add",
    // endpoint: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/addorupdatedata",
    // endpoint2:"https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",

    endpoint: this.ApiService.serverUrlDemo + 'addorupdatedata',
    endpoint2 : this.ApiService.serverUrlDemo,
    source: "testemail",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "newsletter-list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }
  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute, public ApiService: ApiService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.testData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}