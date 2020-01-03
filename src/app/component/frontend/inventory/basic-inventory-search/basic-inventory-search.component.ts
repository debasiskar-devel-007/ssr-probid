import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

export interface DialogData {
  errorMsg: string;
  loginMsg: string;
  
}



@Component({
  selector: 'app-basic-inventory-search',
  templateUrl: './basic-inventory-search.component.html',
  styleUrls: ['./basic-inventory-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInventorySearchComponent implements OnInit {

  public MediaListArray: any = [];

  carouselOptions = {
    margin: 5,
    nav: true,
    loop: true,
    navText: ["<div class='nav-btn prev-slide'><i class='material-icons'>keyboard_backspace</i></div>", "<div class='nav-btn next-slide'><i class='material-icons'>keyboard_backspace</i></div>"],
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,
      },
      600: {
        items: 4,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,
      },
      991: {
        items: 5,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,         
      },
      992: {
        items: 8,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,
        dot:false,
      }
    }
  }


  public indexval:any=10;
  public loginMsg: string ='';
  public errorMsg: string = '';
  public inventoryCustomerForm: FormGroup;
  public stateList: any;
  public inventory_search_list: any;
  public make_list: [];
  public type_list: [];
  public model_list: [];
  public year_list: [];
  public trim_list: [];
  public type: string = '';
  public year: string = '';
  public make: string = '';
  public model: string = '';
  public vin: string = '';
  public trim: string = '';
  public vehicle: string = '';
  public state: string = '';
  public zip: string = '';
  public search: any;
  public user_details:any = '';
  public user_id: string = '';
  public modalImg: string = '';
  public isFavorite: number = 0;
  public customerList: any = '';
  public customur_id: any = '';
  public indexCount: number;
  public indexCountForImg: number;


  


  constructor(public fb: FormBuilder,
    public apiService: ApiService,
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    private readonly meta: MetaService,
    public dialog: MatDialog,
    public cookieService: CookieService,
    public router: Router) {
    this.meta.setTitle('ProBid Auto - Inventory');
    this.meta.setTag('og:description', 'Locate the Pre-Owned Car of your desire at the ProBid Auto Inventory using Basic, as well as Advanced, Search Parameters to make your Car Search easy and convenient, while also saving you loads of time, effort and money');
    this.meta.setTag('twitter:description', 'Locate the Pre-Owned Car of your desire at the ProBid Auto Inventory using Basic, as well as Advanced, Search Parameters to make your Car Search easy and convenient, while also saving you loads of time, effort and money');
    this.meta.setTag('og:keyword', 'Pre-Owned Car Inventory, ProBid Auto Vehicle Inventory, ProBid Auto Inventory');
    this.meta.setTag('twitter:keyword', 'Pre-Owned Car Inventory, ProBid Auto Vehicle Inventory, ProBid Auto Inventory');
    this.meta.setTag('og:title', 'ProBid Auto - Inventory');
    this.meta.setTag('twitter:title', 'ProBid Auto - Inventory');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');


if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
  this.user_details = JSON.parse(this.cookieService.get('user_details'));
  // if ( this.cookieService.get('favorite_car') != undefined && this.cookieService.get('favorite_car') != null && JSON.parse(this.cookieService.get('favorite_car')) != null && JSON.parse(this.cookieService.get('favorite_car')) != '') {
  //   this.search = JSON.parse(this.cookieService.get('favorite_car'));    
  // }
  // if ( this.cookieService.get('rsvp_car') != undefined && this.cookieService.get('rsvp_car') != null && JSON.parse(this.cookieService.get('rsvp_car')) != null && JSON.parse(this.cookieService.get('rsvp_car')) != '') {
  //   this.search = JSON.parse(this.cookieService.get('rsvp_car'));    
  // }
  this.user_id = this.user_details._id;
  console.log(this.user_id);
  
  if(this.user_details.type == "salesrep") {
    let data: any = {
      endpoint: 'datalist',
      source: 'user',
      condition: {
        "salesrep":this.user_id
      }
    }
    this.apiService.getDatalist(data).subscribe((res:any)=>{
      this.customerList = res.res;
      console.log(this.customerList);
    });

  }
}


    this.generateForm();
    this.getStateList();
  }



  ngOnInit() {

    //for make,model,year,type drop down list
    this.activatedRoute.data.forEach((data) => {
      this.inventory_search_list = data.inventory_search
      // this.type_list = this.inventory_search_list.result.manage_type;
      // this.year_list = this.inventory_search_list.result.manage_year;
    })

  }

  

  getStateList() {
    this.apiService.getJsonObject('assets/data/states.json').subscribe((response: any) => {
      this.stateList = response;
    });
  }

 



  //___________generate form for inventory customer search________________//

  generateForm() {
    this.inventoryCustomerForm = this.fb.group({
      type: [''],
      make: [''],
      model: [''],
      year: [''],
      vehicle: [''],
      trim: [''],
      vin: [''],
      state: [''],
      zip: [''],

    })
  }

  //____________search function for inventory customer search_________________//
  reset() {
    this.inventoryCustomerForm.clearValidators();
  }

  inventoryCustomerSearch() {
    if (this.inventoryCustomerForm.valid) {

      let yearVal = this.inventoryCustomerForm.value.year;
      let typeVal = this.inventoryCustomerForm.value.type;
      let makeVal = this.inventoryCustomerForm.value.make;
      let modelVal = this.inventoryCustomerForm.value.model;
      let vinVal = this.inventoryCustomerForm.value.vin;
      let trimVal = this.inventoryCustomerForm.value.trim;
      let vehicleVal = this.inventoryCustomerForm.value.vehicle;
      let stateVal = this.inventoryCustomerForm.value.state;
      let zipVal = this.inventoryCustomerForm.value.zip;

      if (typeVal != null && typeVal != '' && typeVal.length >= 0) {
        this.type = "&body_type=" + typeVal;
      }
      if (yearVal != null && yearVal != '' && yearVal.length >= 0) {
        this.year = "&year=" + yearVal;
      }
      if (makeVal != null && makeVal != '' && makeVal.length >= 0) {
        this.make = "&make=" + makeVal;
      }
      if (modelVal != null && modelVal != '' && modelVal.length >= 0) {
        this.model = "&model=" + modelVal;
      }
      if (vinVal != null && vinVal != '' && vinVal.length >= 0) {
        this.vin = "&vin=" + vinVal;
      }
      if (trimVal != null && trimVal != '' && trimVal.length >= 0) {
        this.trim = "&trim=" + trimVal;
      }
      if (vehicleVal != null && vehicleVal != '' && vehicleVal.length >= 0) {
        this.vehicle = "&vehicle_type=" + vehicleVal;
      }
      if (stateVal != null && stateVal != '' && stateVal.length >= 0) {
        this.state = "&state=" + stateVal;
      }
      if (zipVal != null && zipVal != '' && zipVal.length >= 0) {
        this.zip = "&zip=" + zipVal;
      }
     
      if (this.type != '' || this.year != '' || this.make != '' || this.vin != '' || this.trim != '' || this.vehicle != '' || this.state != '' || this.zip != '' || this.model != '') {

        let search_link = this.apiService.inventory_url + this.type + this.year + this.make + this.vin + this.trim + this.vehicle + this.state + this.zip + this.model+ '&rows=50';

        this.http.get(search_link).subscribe((res: any) => {
          this.search = res.listings;
          console.log('search list',this.search)
            console.log(this.search);
        })
      } else {
        this.errorMsg = "Please select at least one field";

        const dialogRef = this.dialog.open(errorDialog, {
          width: '250px',
          data: { errorMsg: this.errorMsg }
        });

      }


    }

  }



  searchAutoComplete(event: any, field: string) {

    let input: string = '';
    let inputField: string = '';
    if (event.target.value != null && event.target.value != '' && event.target.value.length >= 0) {
      input = "&input=" + event.target.value;
    }
    if (field != null && field != '' && field.length >= 0) {
      inputField = "&field=" + field;
    }

    if (inputField != '' && ( input !='' || this.type != '' || this.year != '' || this.make != '' || this.vin != '' || this.trim != '' || this.vehicle != '' || this.state != '' || this.zip != '' || this.model != '')) {
    let search_url: string = this.apiService.inventory_auto_complete_url+ inputField + input + this.type + this.make +"&country=US&ignore_case=true&term_counts=false&sort_by=index";

    this.http.get(search_url).subscribe((res: any) => {
     
      if (field == 'make') {
        this.make_list = res.terms; 
        console.log(field, this.make_list);
      }
      if (field == 'model') {
        this.model_list = res.terms; 
        console.log(field); 
      }
      if (field == 'body_type') {
        this.type_list = res.terms; 
        console.log(field, this.type_list); 
      }
      if (field == 'trim') {
        this.trim_list = res.terms; 
        console.log(field, this.trim_list); 
      }

    });
  }

  }


  gotologin(){
    this.router.navigateByUrl('/login'+this.router.url)
    console.log('/login'+this.router.url)
  }

  loginbefore(){
    this.loginMsg = "To access the ProbidAuto Search Results";

        const dialogRef = this.dialog.open(loginBeforeDialog, {
          width: '450px',
          data: { loginMsg: this.loginMsg }
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
          if (result == 'yes') {
            this.gotologin();
          }
          // this.loginMsg = result;
        });

   
  }


  favorite(item: any) {
    console.log('this is favorite ')
    if (this.user_id  == '') {
      this.cookieService.set('favorite_car', JSON.stringify(item));
      setTimeout(() => {
        this.loginbefore();
      }, 500);
    }
    else{
      console.log(this.cookieService.get('favorite_car'))
      let endpoint: any = "addorupdatedata";
      item.added_by = this.user_id;
      let card_data:any = {
        card_data: item
      }
      let data: any = {
        data: card_data,
        source: "save_favorite",
      };
      console.log(data)
        this.apiService.CustomRequest(data, endpoint).subscribe((res:any) => {
          console.log(res);
          (res.status == "success")
        });
    }
   
  }

  rsvpSend(item: any) {
    console.log(this.user_id)
    if (this.user_id  == '') {
      this.cookieService.set('rsvp_car', JSON.stringify(item));
      setTimeout(() => {
        this.loginbefore();
      }, 500);
    }
    else {
    console.log('rsvpSend',item);
    console.log(this.cookieService.get('rsvp_car'));
    let endpoint: any = "addorupdatedata";
    item.added_by = this.user_id;
    item.status = 0;
    if (this.user_details.type == 'salesrep') {
      item.added_for = this.customur_id;
      } else {
        item.added_for = this.user_id;
      }
    let card_data:any = {
      card_data: item
    }
    let data: any = {
      data: card_data,
      source: "send_for_rsvp",
    };
    console.log(data)
      this.apiService.CustomRequest(data, endpoint).subscribe((res:any) => {
        console.log(res);
        (res.status == "success")
      });
    }
  }

  showimg(i:any, j:any){
    console.log('+++',i, j)
    this.indexCount = i;
    this.indexCountForImg = j;
  }

  loadMoreSearchResult(){
    this.indexval=this.indexval+5;
  }


}


@Component({
  selector: 'error',
  templateUrl: 'errorDialog.co.html',
})
export class errorDialog {

  constructor(
    public dialogRef: MatDialogRef<errorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}



@Component({
  selector: 'loginbefore',
  templateUrl: 'loginbefore.html',
})
export class loginBeforeDialog {
  constructor(
    public dialogRef: MatDialogRef<loginBeforeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
  }
  

  LinkToLogin(): void {
    this.dialogRef.close();
  }

}



