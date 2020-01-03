
import { ApiService } from '../../../api.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
 
import { environment } from '../../../../environments/environment';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-newsletterlists',
  templateUrl: './newsletterlists.component.html',
  styleUrls: ['./newsletterlists.component.css']
})
export class NewsletterlistsComponent implements OnInit {

  public myformsetting: FormGroup;


  public indexval:any;

  public BaseUrl:any= environment["API_URL"];

  public newsConfigForm: any = {
    apiBaseUrl: this.BaseUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "newsletters",
    updateurl: "addorupdatedata",
    editUrl: "newsletter/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "newsletter/add",
    view: ""
  }


  
public subscriptionForm: any = {
  apiBaseUrl: this.BaseUrl,
  listEndPoint: "datalist",
  datasource: "",
  tableName: "subscriptions",
  updateurl: "addorupdatedata",
  editUrl: "subscriber/add-group/edit/",
  jwtToken: "",  
  deleteEndPoint: "deletesingledata",
  addLink: "subscriber/add",
  view: "subscriptions_view"

}

  public subscriptionCatForm: any = {
    apiBaseUrl: this.BaseUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "resources",
    updateurl: "addorupdatedata",
    editUrl: "subscriber-group/edit/",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "subscriber-group/add",
    view: "news_category_view"

  }



 


  public testEmailConfigForm: any = {
    // apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
    apiBaseUrl: this.BaseUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "testemail",
    updateurl: "addorupdatedata",
    editUrl: "test/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/test/add",
    view: ""

  }


 
  public senderConfigForm: any = {
    // apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
    apiBaseUrl: this.BaseUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "senders",
    updateurl: "addorupdatedata",
    editUrl: "/sender/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/sender/add",
    view: ""

  }
  
  constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService,  public apiservice: ApiService, public fb: FormBuilder ) { 



    

     // SubscriptionsList

     let data: any = {
      source:"subscriptions_view",
      endpoint: "datalist"

    }
    this.apiservice.getDatalist(data).subscribe((result: any)=>{
      this.subscriptionForm.datasource = result.res;
      // console.log('>>>>>>>>>>>>koushik subscription>>>>>>>>>>>>>', this.subscriptionForm.datasource);
    });



    // SubscriptionsCATEGORYList

    let dataSubCat: any = {
      source:"news_category_view",
      endpoint: "datalist"

    }
    this.apiservice.getDatalist(dataSubCat).subscribe((result: any)=>{
      this.subscriptionCatForm.datasource = result.res;
      // console.log('>>>>>>>>>>>>koushik subscription Category>>>>>>>>>>>>>', this.subscriptionCatForm.datasource);
    });
        

       // testemail 

       let dataTestemail: any = {
        source:"testemail_view",
        endpoint: "datalist"
  
      }
      this.apiservice.getDatalist(dataTestemail).subscribe((result: any)=>{
        this.testEmailConfigForm.datasource = result.res;
        //  console.log('>>>>>>>>>>>>amitavatestemail>>>>>>>>>>>>>', this.testEmailConfigForm.datasource);
      });


      
       // sender 

       let dataSenderapp: any = {
        source:"senders_view",
        endpoint: "datalist"
  
      }
      this.apiservice.getDatalist(dataSenderapp).subscribe((result: any)=>{
        this.senderConfigForm.datasource = result.res;
        //  console.log('>>>>>>>>>>>>amitavasender>>>>>>>>>>>>>', this.senderConfigForm.datasource);
      });



      this.myformsetting = this.fb.group({ 
        email: [null, [Validators.required, Validators.email, Validators.maxLength(100)]],
       
      })
    
  }

  ngOnInit() {
      // NewsletterList 

  this.activatedRoute.data.subscribe(resolveData => {
    this.newsConfigForm.datasource = resolveData.newsData.res;
    this.newsConfigForm.jwtToken = this.cookieService.get('jwtToken');
    // console.log('test', this.newsConfigForm.datasource);

  });
  }


  dosettingSubmit() {

    // console.log(this.myform.value);
    let x: any;
    for (x in this.myformsetting.controls) {
      this.myformsetting.controls[x].markAsTouched();
    }
    if (this.myformsetting.valid) {

      /**form value insert */
      let data = { "source": "user", data: this.myformsetting.value };
      this.apiservice.CustomRequest(data, 'addorupdatedata').subscribe(res => {
        let result: any = {};
        result = res;
        console.log(result);
        if (result.status == 'success') {

          this.myformsetting.reset();
          
           

        }
      })
    }
  }

    /**blur function */
    inputUntouch(form: any, val: any) {
      form.controls[val].markAsUntouched();
      //console.log('on blur .....');
    }
  
}


