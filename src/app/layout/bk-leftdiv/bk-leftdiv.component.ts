import { Component, OnInit,  ViewChild } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { MatSidenav } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-bk-leftdiv',
  templateUrl: './bk-leftdiv.component.html',
  styleUrls: ['./bk-leftdiv.component.css']
})
export class BkLeftdivComponent implements OnInit {

  @ViewChild('leftSidenav') public sidenav: MatSidenav;
  
  public status: any = 1;

  public userCookies: any;
  public user_full_name: any = '';     
  public user_data: any;

  constructor(public cookieService: CookieService, private sidenavService: SidenavService) {
    
    // this.user_data = JSON.parse(this.cookieService.get('user_details'));
   }


  ngOnInit(): void {

    this.sidenavService.setSidenav(this.sidenav);

  }

  open(val:any){
    this.status = val;
  }

}
