import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
//   public user_management_ditiles: any = [];
//   public user_management_ditiles_skip: any = ['password','_id'];
//   public user_management_ditiles_modify_header: any = {
//     'email': 'Email Id',
//     '_id': "ID"
// };
// public tablename: any= 'user';

  constructor(public route: ActivatedRoute, public apiService: ApiService) { }

  ngOnInit() {
    // this.route.data.forEach(data =>{
    //   let result:any;
    //   result=data.serviceList.res;
    //   this.user_management_ditiles = result;
    //   console.log(this.user_management_ditiles.length)
    //   console.log(this.user_management_ditiles)
    // })
  }

}
