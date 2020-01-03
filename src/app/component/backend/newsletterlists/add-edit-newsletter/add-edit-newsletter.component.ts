import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../api.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-add-edit-newsletter',
  templateUrl: './add-edit-newsletter.component.html',
  styleUrls: ['./add-edit-newsletter.component.css']
  
})
export class AddEditNewsletterComponent implements OnInit {

  public configAddEdit: any = {
    action: "add",
   
     endpoint: environment.API_URL+'/addorupdatedata',
     endpoint2: environment.API_URL,
    // endpoint: environment.API_URL+'addorupdatedata',
   // endpoint: this.apiservice.serverUrl + 'addorupdatedata',
    source: "newsletters",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "newsletter-list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null,
    group_table:'news_category',
    sender_table:'senders'

  
    
  }  
  
  constructor(public cookieService: CookieService, private activatedRoute: ActivatedRoute, public apiservice: ApiService) {
    console.log('data',this.configAddEdit.endpoint );
  }



  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.newsLetterAdd.res;

          console.log( this.configAddEdit.defaultData );
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };

        });
      }
    });
  }

}


