import { Component, OnInit,Inject} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute ,Router} from '@angular/router';
import { ApiService } from '../../../api.service';
// import { MatDialog } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';


export interface DialogData {
  data: any;
  msg:any;
} 

@Component({
  selector: 'app-repdashboard',
  templateUrl: './repdashboard.component.html',
  styleUrls: ['./repdashboard.component.css']
})
export class RepdashboardComponent implements OnInit {
  public userCookies: any;
  public userid: any = '';

  public datalist: any = '';
  public saveSearchIndex:any=5;
  public message:any="Are you sure you want to delete this?";
  public rsvpList:any;
  public saveSearchList:any;



  
  constructor(public cookieService: CookieService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public dialog: MatDialog,public snack:MatSnackBar,public router:Router) {
    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
      this.userCookies = JSON.parse(this.cookieService.get('user_details'));
      this.userid = this.userCookies._id; 
      }
   }

  ngOnInit() {
    this.activatedRoute.data.forEach((data:any) => {
      console.log('dash-data',data)

      this.datalist = data.rsvp.result;

      this.rsvpList=data.rsvp.result.rsvp_list

      this.saveSearchList=data.rsvp.result.save_search 
    })
  }

  /* To copy Text from Textbox */
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  deleteRsvp(item: any,index:any){
    console.log('this is favorite ',item,index);
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      width: '250px',
      data:this.message

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      
        if(result=='yes'){
    let data: any = {
      id:item._id,
      source: 'send_for_rsvp'
    }
    this.apiService.deleteSingleData1(data).subscribe((res: any)=>{
      console.log(res);
      if (res.status == 'success') {
        this.rsvpList.splice(index,index+1);
        this.snack.open('Record Removed Successfully..!','Ok',{duration:2000})
        
      }
    })
  }
})


  }

  deleteSaveSearch(item: any,index:any){
    console.log('this is favorite ',item,index);

    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      width: '250px',
      data:this.message

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      
        if(result=='yes'){
    let data: any = {
      id:item._id,
      source: 'save_favorite'
    }
    this.apiService.deleteSingleData1(data).subscribe((res: any)=>{
      console.log(res);
      if (res.status == 'success') {
        this.saveSearchList.splice(index,index+1);
        this.snack.open('Record Removed Successfully..!','Ok',{duration:2000})
        
      }
    })
  }
})

  }

}



//modal component for delete RSVP & 


@Component({
  selector:'app-removeDialog',
  templateUrl:'./removeDialog.html'
})
export class RemoveDialogComponent {
  constructor( public dialogRef: MatDialogRef<RemoveDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }
}

