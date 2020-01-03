import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advance-inventory-search',
  templateUrl: './advance-inventory-search.component.html',
  styleUrls: ['./advance-inventory-search.component.css']
})
export class AdvanceInventorySearchComponent implements OnInit {

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
  public advanceInventoryCustomerForm: FormGroup;
  public stateList: any;
  public inventory_search_list: any;
  public make_list: any;
  public type_list: any;
  public model_list: any;
  public year_list: any;
  public trim_list: [];
  public type = '';
  public year = '';
  public make = '';
  public model = '';
  public trim = '';
  public vin = '';
  public vehicle = '';
  public state = '';
  public zip = '';
  public search = '';

  public indexCountForImg:any;
  public indexCount:any;

  constructor(public fb: FormBuilder,
    public apiService: ApiService,
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    private readonly meta: MetaService) {

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

    this.generateForm();
    this.getStateList();
  }

  ngOnInit() {

    //for make,model,year,type drop down list
    this.activatedRoute.data.forEach((data) => {
      this.inventory_search_list = data.inventory_search
      this.year_list = this.inventory_search_list.result.manage_year;
    })

  }

  getStateList() {
    this.apiService.getJsonObject('assets/data/states.json').subscribe(response => {
      let result: any = {};
      result = response;
      this.stateList = result;
    })
  }

  generateForm() {
    this.advanceInventoryCustomerForm = this.fb.group({
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

  // advanceInventoryCustomerSearch() {
  //   if (this.advanceInventoryCustomerForm.valid) {
  //     let yearVal = this.advanceInventoryCustomerForm.value.year;
  //     let typeVal = this.advanceInventoryCustomerForm.value.type;
  //     let makeVal = this.advanceInventoryCustomerForm.value.make;
  //     let modelVal = this.advanceInventoryCustomerForm.value.model;

  //     if (typeVal != null && typeVal != '' && typeVal.length >= 0) {
  //       this.type = "&0seller_type=" + typeVal
  //     }
  //     if (yearVal != null && yearVal != '' && yearVal.length >= 0) {
  //       this.year = "&year=" + yearVal
  //     }
  //     if (makeVal != null && makeVal != '' && makeVal.length >= 0) {
  //       this.make = "&make=" + makeVal
  //     }
  //     let search_link = this.apiService.inventory_url + this.type + this.year + this.make;
  //     this.http.get(search_link).subscribe((res: any) => {
  //       console.log('>>>>', res.listings)

  //     })

  //   }

  // }

  advanceInventoryCustomerSearch() {
    if (this.advanceInventoryCustomerForm.valid) {

      let yearVal = this.advanceInventoryCustomerForm.value.year;
      let typeVal = this.advanceInventoryCustomerForm.value.type;
      let makeVal = this.advanceInventoryCustomerForm.value.make;
      let modelVal = this.advanceInventoryCustomerForm.value.model;
      let vinVal = this.advanceInventoryCustomerForm.value.vin;
      let trimVal = this.advanceInventoryCustomerForm.value.trim;
      let vehicleVal = this.advanceInventoryCustomerForm.value.vehicle;
      let stateVal = this.advanceInventoryCustomerForm.value.state;
      let zipVal = this.advanceInventoryCustomerForm.value.zip;

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

        let search_link = this.apiService.inventory_url + this.type + this.year + this.make + this.vin + this.trim + this.vehicle + this.state + this.zip + this.model+ '&rows=5';

        this.http.get(search_link).subscribe((res: any) => {
          this.search = res.listings;
          console.log('search list',this.search)

        })
      } else {
        // this.errorMsg = "Please select at least one field";

        // const dialogRef = this.dialog.open(errorDialog, {
        //   width: '250px',
        //   data: { errorMsg: this.errorMsg }
        // });

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

    if (inputField != '' && ( input !='' || this.type != '' || this.year != '' || this.make != '' || this.vin != '' || this.trim != '' || this.state != '' || this.zip != '' || this.model != '')) {
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

  showimg(i:any,j:any){
    console.log('>>',i,j)

    this.indexCount=i;
    this.indexCountForImg=j
  }


  loadMoreSearchResult(){
    this.indexval=this.indexval+5;
  }


}
