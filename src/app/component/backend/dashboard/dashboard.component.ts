import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MetaService } from '@ngx-meta/core';

export interface DialogData {
  data: any;
  msg: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userCookies: any;
  public userid: any = '';

  public user_full_name: any = '';


  public datalist: any = '';
  public saveSearchIndex: any = 5;

  public rsvp_list: any = '';
  public ststus: number;


  public errorMsg: string = '';
  public stateList: any;
  public message: any = "Are you sure you want to delete this?";

  public indexvalue:number=5;

  public formTitle: any = "Contact Us Listing Page";
  // public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';

  public getDataUrl: any = {
    endpoint: 'datalist',
    source: 'contactusForm'
  };
  public updateurl: any = "addorupdatedata";
  public deleteurl: any = {
    endpoint: "deletesingledata",
    source: "contactusForm"
  };
  public addEndpoint: any = 'demoappemailsend';
  public indexval: number = 3;
  // public getDataUrl: any = 'datalist';
  public contactUsAllDataHeaderSkip: any = ['_id'];
  public contactUsAllDataModifyHeader: any = { addresses: 'Addresses', emails: 'Emails', locationname: 'Location Name', phones: 'Phones' };

  public serverUrl: any = this.ApiService.serverUrlDemo;
  constructor(private readonly meta: MetaService, public ApiService: ApiService, public cookieService: CookieService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public http: HttpClient, public dialog: MatDialog, public snack: MatSnackBar, public router: Router) {


    this.meta.setTitle('About us dynamic');
    this.meta.setTag('og:description', 'This is dynamic decription ');
    this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');



    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
      this.userCookies = JSON.parse(this.cookieService.get('user_details'));
      // console.log(this.userCookies);
      this.userid = this.userCookies._id;
      // console.log('>>>>',this.userid)   
    }


  }

  ngOnInit() {
    this.activatedRoute.data.forEach((data: any) => {
      // console.log('dash-data',data)
      this.datalist = data.rsvp.result;
      console.log('dash-data', this.datalist)

    })
  }

  //rsvp delete
  deleteRsvp(val: any, i: any) {
    // console.log(val, i);
    const dialogRef = this.dialog.open(RemoveRSvpModalComponent, {
      width: '250px',
      data: this.message

    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result)

      if (result == 'yes') {
        let data: any = {
          id: val._id,
          source: 'send_for_rsvp'
        }
        this.apiService.deleteSingleData1(data).subscribe((res: any) => {
          // console.log(res);
          if (res.status == 'success') {
            this.datalist.rsvp_list.splice(i, i + 1);
            this.snack.open('Record Removed Successfully..!', 'Ok', { duration: 4000 })

          }
        })
      }
    })

  }

  //for save search
  deleteSaveSearch(item: any, i: any) {
    // console.log('this is favorite ', item, i);

    const dialogRef = this.dialog.open(RemoveRSvpModalComponent, {
      width: '250px',
      data: this.message

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)

      if (result == 'yes') {
        let data: any = {
          id: item._id,
          source: 'save_favorite'
        }
        this.apiService.deleteSingleData1(data).subscribe((res: any) => {
          console.log(res);
          if (res.status == 'success') {
            this.datalist.save_search.splice(i, i + 1);
            this.snack.open('Record Removed Successfully..!', 'Ok', { duration: 2000 })

          }
        })
      }
    })

  }

}




//modal component for delete RSVP


@Component({
  selector: 'app-removeRsvpModal',
  templateUrl: './removeRsvpModal.html'
})
export class RemoveRSvpModalComponent {
  constructor(public dialogRef: MatDialogRef<RemoveRSvpModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }
}
