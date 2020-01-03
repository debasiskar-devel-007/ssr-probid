import { Component, OnInit, ViewChild ,Inject} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute ,Router} from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';



export interface DialogData {
  data: any;
  msg:any;
}


const UA_DATA: UpcomingAppoinement[] = [
  {name: 'Lorem I psum is', phoneNumber: '0000 000 000' , date: '26-11-2019 16:50', repName: 'Lorem I psum', action: 'Manage', image_URL: '../../../../assets/images/adm-UA-img1.jpg'},
  {name: 'Lorem I psum is', phoneNumber: '0000 000 000' , date: '26-11-2019 16:50', repName: 'Lorem I psum', action: 'Manage', image_URL: '../../../../assets/images/adm-UA-img2.jpg'},
  {name: 'Lorem I psum is', phoneNumber: '0000 000 000' , date: '26-11-2019 16:50', repName: 'Lorem I psum', action: 'Manage', image_URL: '../../../../assets/images/adm-UA-img3.jpg'},
  {name: 'Lorem I psum is', phoneNumber: '0000 000 000' , date: '26-11-2019 16:50', repName: 'Lorem I psum', action: 'Manage', image_URL: '../../../../assets/images/adm-UA-img4.jpg'},
  {name: 'Lorem I psum is', phoneNumber: '0000 000 000' , date: '26-11-2019 16:50', repName: 'Lorem I psum', action: 'Manage', image_URL: '../../../../assets/images/adm-UA-img5.jpg'},
  {name: 'Lorem I psum is', phoneNumber: '0000 000 000' , date: '26-11-2019 16:50', repName: 'Lorem I psum', action: 'Manage', image_URL: '../../../../assets/images/adm-UA-img6.jpg'},
  {name: 'Lorem I psum is', phoneNumber: '0000 000 000' , date: '26-11-2019 16:50', repName: 'Lorem I psum', action: 'Manage', image_URL: '../../../../assets/images/adm-UA-img7.jpg'},
  {name: 'Lorem I psum is', phoneNumber: '0000 000 000' , date: '26-11-2019 16:50', repName: 'Lorem I psum', action: 'Manage', image_URL: '../../../../assets/images/adm-UA-img8.jpg'},
  {name: 'Lorem I psum is', phoneNumber: '0000 000 000' , date: '26-11-2019 16:50', repName: 'Lorem I psum', action: 'Manage', image_URL: '../../../../assets/images/adm-UA-img9.jpg'},
];


const JobTicket_DATA: JobTicket[] = [
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
  {ticket: '123456', title: 'Lorem I psum is' , category: 'Lorem', status:'active', repName: 'Lorem I psum', action: 'Manage'},
];



const Reports_DATA: Reports[] = [
  {date_joined: '11-09-2019', name: 'Lorem Ipsum' , email: 'LoremIpsumis@gmail.com', phoneNumber:'1234567890', trainingProgress: '56 %', date_completed: '02-12-2019', status:'complete'},
  {date_joined: '11-09-2019', name: 'Lorem Ipsum' , email: 'LoremIpsumis@gmail.com', phoneNumber:'1234567890', trainingProgress: '56 %', date_completed: '02-12-2019', status:'Incomplete'},
  {date_joined: '11-09-2019', name: 'Lorem Ipsum' , email: 'LoremIpsumis@gmail.com', phoneNumber:'1234567890', trainingProgress: '56 %', date_completed: '02-12-2019', status:'Incomplete'},
  {date_joined: '11-09-2019', name: 'Lorem Ipsum' , email: 'LoremIpsumis@gmail.com', phoneNumber:'1234567890', trainingProgress: '56 %', date_completed: '02-12-2019', status:'Incomplete'},
  {date_joined: '11-09-2019', name: 'Lorem Ipsum' , email: 'LoremIpsumis@gmail.com', phoneNumber:'1234567890', trainingProgress: '56 %', date_completed: '02-12-2019', status:'Incomplete'},
  {date_joined: '11-09-2019', name: 'Lorem Ipsum' , email: 'LoremIpsumis@gmail.com', phoneNumber:'1234567890', trainingProgress: '56 %', date_completed: '02-12-2019', status:'Incomplete'},
  {date_joined: '11-09-2019', name: 'Lorem Ipsum' , email: 'LoremIpsumis@gmail.com', phoneNumber:'1234567890', trainingProgress: '56 %', date_completed: '02-12-2019', status:'Incomplete'},
  {date_joined: '11-09-2019', name: 'Lorem Ipsum' , email: 'LoremIpsumis@gmail.com', phoneNumber:'1234567890', trainingProgress: '56 %', date_completed: '02-12-2019', status:'Incomplete'},
];



export class socialFacebookAdvos {
  Id: String;
  title_name: String;
  image_URL: String;
}

export class socialLinkedinAdvos {
  Id: String;
  title_name: String;
  image_URL: String;
}


export interface UpcomingAppoinement {
  name: string;
  phoneNumber: string;
  date: string;
  repName: string;
  action: string;
  image_URL: string;
}

export interface JobTicket {
  ticket: string;
  repName: string;
  title: string;
  category: string;
  status: string;
  action: string;
}


export interface Reports {
  date_joined: string;
  name: string;
  email: string;
  phoneNumber: string;
  trainingProgress: string;
  date_completed: string;
  status: string;
}

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {


  


  public message:any="Are you sure you want to delete this?"

// public static: any; 
public userCookies: any;
public user_full_name: any = '';


public rsvp_list: any = '';
public saveSearch_list: any = '';
public ststus: number;

 
public rsvpIndex:any=2;
public saveSearchIndex:any=10;

public socialadvoFBIndex:any=6;
public socialadvoLDIndex:any=6;



public errorMsg: string = '';
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
  public customur_id: any = '';
  public crsvplist:any ='';
  public count:any ='';


  socialAdvFacebookLists: socialFacebookAdvos[];
  socialAdvLinkedinLists: socialLinkedinAdvos[];

  

  
  UAColumns: string[] = ['name', 'phoneNumber', 'date', 'repName', 'action'];
  upcomingAppoinementDataSource = new MatTableDataSource<UpcomingAppoinement>(UA_DATA);
  @ViewChild(MatPaginator, {}) uaPaginator: MatPaginator;



  JTColumns: string[] = ['ticket', 'repName', 'title', 'category', 'status', 'action'];
  jobTicketDataSource = new MatTableDataSource<JobTicket>(JobTicket_DATA);
  @ViewChild(MatPaginator, {}) jtPaginator: MatPaginator;


  ReportColumns: string[] = ['date_joined', 'name', 'email', 'phoneNumber', 'trainingProgress', 'date_completed', 'status'];
  reportsDataSource = new MatTableDataSource<Reports>(Reports_DATA);
  @ViewChild(MatPaginator, {}) reportPaginator: MatPaginator;



  constructor(public cookieService: CookieService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public http: HttpClient, public dialog: MatDialog,public snack:MatSnackBar,public router:Router) {
    

    this.socialAdvFacebookLists = [{ Id: '1001', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/facebookbanner-img1.jpg' },
    { Id: '1002', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/facebookbanner-img2.jpg' },
    { Id: '1003', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/facebookbanner-img3.jpg' },
    { Id: '1004', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/facebookbanner-img4.jpg' },
    { Id: '1005', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/facebookbanner-img5.jpg' },
    { Id: '1006', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/facebookbanner-img6.jpg' },
    { Id: '1006', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/facebookbanner-img7.jpg' },
    { Id: '1006', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/facebookbanner-img8.jpg' },
    { Id: '1006', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/facebookbanner-img9.jpg' },
    ];


    this.socialAdvLinkedinLists = [
    { Id: '1007', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/linkedinbanner-img1.jpg' },
    { Id: '1008', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/linkedinbanner-img2.jpg' },
    { Id: '1008', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/linkedinbanner-img3.jpg' },
    { Id: '1008', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/linkedinbanner-img4.jpg' },
    { Id: '1008', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/linkedinbanner-img5.jpg' },
    { Id: '1008', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/linkedinbanner-img6.jpg' },
    ];



  
    
   }

  ngOnInit() {
    this.activatedRoute.data.forEach((data:any) => {
      // this.crsvplist = data.fordashboard.result.save_search;
      console.log('dash-data',data)

      this.rsvp_list = data.rsvp.result.currentRsvp;

      this.saveSearch_list = data.rsvp.result.save_search;
      this.count = data.rsvp.result;

      console.log('dvfdgfhg', this.count)
    })


    this.upcomingAppoinementDataSource.paginator = this.uaPaginator;

    this.jobTicketDataSource.paginator = this.jtPaginator;

    this.reportsDataSource.paginator = this.reportPaginator;
   

  }

  deleteAny(item:any,index:any,flag:string){
    console.log('>>>>',item,index)
    const dialogRef = this.dialog.open(DeleteModalRsvpComponent, {
      width: '250px',
      data:this.message

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      
        if(result=='yes'){
          let data:any;
            if(flag=='rsvp'){
              data={
                "source":"send_for_rsvp",
                id:item._id
                }
                this.apiService.CustomRequest(data,'deletesingledata').subscribe((res)=>{
                  let result:any;
                  result=res;
                  console.log('success',result)
                  
                  if(result.status=='success'){
                    this.rsvp_list.splice(index,index+1);
                    this.snack.open('Record Deleted Successfully..!','Ok',{duration:4000})
                    
                  }
                })
            } 
           else {
              data={
                "source":"save_favorite",
                id:item._id
                }
                this.apiService.CustomRequest(data,'deletesingledata').subscribe((res)=>{
                  let result:any;
                  result=res;
                  console.log('success',result)
                  
                  if(result.status=='success'){
                    this.saveSearch_list.splice(index,index+1);
                    this.snack.open('Record Deleted Successfully..!','Ok',{duration:4000})
                    
                  }
                })
            }
        }
    });
  }


  // loadMoreSearchResult(){
  //   this.socialadvoIndex=this.socialadvoIndex+2;
  // }


  }




//component for delete modal

@Component({
  selector:'app-deleteModalRsvp',
  templateUrl:'./deleteModalRsvp.html'
})
export class DeleteModalRsvpComponent {
  constructor( public dialogRef: MatDialogRef<DeleteModalRsvpComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }
}

