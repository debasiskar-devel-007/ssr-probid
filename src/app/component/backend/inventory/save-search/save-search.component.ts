import { Component, OnInit, Inject } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';


export interface DialogData {
  errorMsg: string;
}

export interface DialogData {
  data: any;
  msg:any;
} 

@Component({
  selector: 'app-save-search',
  templateUrl: './save-search.component.html',
  styleUrls: ['./save-search.component.css']
})
export class SaveSearchComponent implements OnInit {

  public MediaListArray: any = [];
  public loader: boolean = false;
  public message:any="Are you sure you want to delete this?";
  public indexCountForImg:any;
  public indexCount:any;
  public customer_id: any = '';
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



  public errorMsg: any='Please select Customer name';
  public indexval:any=4;
  public inventoryCustomerForm: FormGroup;
  public stateList: any;
  public inventory_search_list: any;
  public make_list: any;
  public type_list: any;
  public model_list: any;
  public year_list: any;
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
  public user_details:any;
  public user_id: string = '';
  public modalImg: string = '';
  public isFavorite: number = 0;
  public customerList: any = '';
  // public customur_id: any = '';



  constructor(public fb: FormBuilder,
    public apiService: ApiService,
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    private readonly meta: MetaService,
    public dialog: MatDialog,
    public cookieService: CookieService,
    public router: Router,public snack:MatSnackBar) 
    
    
    {
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
  this.user_id = this.user_details._id;
  // console.log(this.user_id);
  // console.log(this.user_details)
  // console.log('>>',this.user_details.type)
  
  if(this.user_details.type == "salesrep") {
    let data: any = {
      endpoint: 'datalist',
      source: 'user',
      condition: {
        "salesrep":this.user_id,
        "type":"customer"
      }
    }
    this.apiService.getDatalist(data).subscribe((res:any)=>{
      this.customerList = res.res;
      // console.log('.>>>>>>>',this.customerList);
    });

  }
}
  }

  ngOnInit() {
    this.getData();

    //for make,model,year,type drop down list
    this.activatedRoute.data.forEach((data) => {
      // console.log(data)
      this.search = data.inventory_search.res;
      // console.log('search>>',this.search)
    });
  }

  gotologin(){
    this.router.navigateByUrl('/login'+this.router.url)
    // console.log('/login'+this.router.url)
  }

  getData(){
    let data: any = {
      endpoint: 'datalist',
      source: 'save_favorite_view',
      condition: {
        "added_by":this.user_id
      }
    }
    this.apiService.getDatalist(data).subscribe((res:any)=>{
      // console.log(res);
    })
  }


  unFavorite(item: any,index:any) {
    // console.log('this is favorite ',item,index);
    const dialogRef = this.dialog.open(RemoveModalComponent, {
      width: '250px',
      data:this.message

    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result)
      
        if(result=='yes'){
    let data: any = {
      id:item._id,
      source: 'save_favorite'
    }
    this.apiService.deleteSingleData1(data).subscribe((res: any)=>{
      // console.log(res);
      if (res.status == 'success') {
        this.search.splice(index,index+1);
        this.snack.open('Record Removed Successfully..!','Ok',{duration:2000})
        
      }
    })
  }
})
  
  }

  // rsvpSend(item: any) {
  //   console.log('rsvp send',this.customur_id);
  //   console.log('rsvp send',item);
  //   if (this.customer_id != null && this.customer_id != '') {
  //   let endpoint: any = "addorupdatedata";
  //   if (this.user_details.type == 'salesrep') {
  //   item.added_for = this.customur_id;
  //   }
  //   item.added_by = this.user_id;
  //   item.status = 0;
  //   let card_data:any = {
  //     card_data: item
  //   }
  //   let data: any = {
  //     data: card_data,
  //     source: "send_for_rsvp",
  //   };
  //   console.log(data)
  //     this.apiService.CustomRequest(data, endpoint).subscribe((res:any) => {
  //       console.log(res);
  //       (res.status == "success")
  //     });
  //   } else{
  //     this.errorMsg = "Please select Customer name";

  //   }

  // }

  rsvpSend(item: any,i:any) {
    

    // console.log('rsvpSend>>',item,i)

 if(this.user_details.type =='salesrep'){

  if (item.customer_id != '' && item.customer_id != null ) {
        let endpoint: any = "addorupdatedata";
        item.added_by = this.user_id;
        item.added_by_salesrep = 1;

        item.status = 0;
        // if (this.user_details.type == 'salesrep') {
          item.added_for = item.customer_id;
          // } else {
          //   item.added_for = this.user_id;
          // }
        let card_data:any = {
          card_data: item
        }
        let data: any = {
          data: card_data,
          source: "send_for_rsvp",
        };
        // console.log(data)
          this.apiService.CustomRequest(data, endpoint).subscribe((res:any) => {
            // console.log(res);
            if(res.status == "success"){

              this.snack.open('RSVP Added Successfully','Ok',{
                duration:2000
              })
              
              let data: any = {
                id:item._id,
                source: 'save_favorite'
              }
              this.apiService.deleteSingleData1(data).subscribe((res: any)=>{
                // console.log(res);
                if (res.status == 'success') {
                  this.search.splice(i,i+1);
                }
              })


             
            }
          });
    } 
    else{

      item.customer_id=''
      this.errorMsg;
      // console.log(this.errorMsg)

    }

  }

  if(this.user_details.type =='customer'){
      
    let endpoint: any = "addorupdatedata";
      item.added_by = this.user_details.salesrep;
      item.status = 0;
    
      item.added_for = this.user_id;

      let card_data:any = {
        card_data: item
      }
      let data: any = {
        data: card_data,
        source: "send_for_rsvp",
      };
      // console.log(data)
        this.apiService.CustomRequest(data, endpoint).subscribe((res:any) => {
          // console.log(res);
          if(res.status == "success"){

            this.snack.open('RSVP Added Successfully','Ok',{
              duration:2000
            })
            let data: any = {
              id:item._id,
              source: 'save_favorite'
            }
            this.apiService.deleteSingleData1(data).subscribe((res: any)=>{
              // console.log(res);
              if (res.status == 'success') {
                this.search.splice(i,i+1);
              }
            })


          }
        })

  }
} 


  showimg(i: any,j:any){
    // this.modalImg = img;
    // console.log('>>>>',i,j)
    this.indexCount = i;
    this.indexCountForImg = j;

  }

  loadMoreSaveSearch(){
    this.indexval=this.indexval+2;
  }

  inventoryDetails(val:any){
    // console.log('details>>',val)
    this.router.navigateByUrl('/inventory-detail/'+val);
  }

}



//modal component for delete RSVP


@Component({
  selector:'app-removeModal',
  templateUrl:'./removeModal.html'
})
export class RemoveModalComponent {
  constructor( public dialogRef: MatDialogRef<RemoveModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }
}



