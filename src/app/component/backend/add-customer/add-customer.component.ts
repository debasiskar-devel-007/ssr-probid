import { Component, OnInit, ViewChildren, ViewChild,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public addcustomerForm: FormGroup;
  public stateList: any;
  public cityList: any;
  public salesrepList:any;
  public userType:any;
  public userDetails:any;
  public header_text:any="Add Customer"
public btn_text:any="Submit"
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  constructor(public activatedRouter:ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder,public dialog: MatDialog,public router:Router,public cookieService:CookieService) { 

    this.userDetails = JSON.parse(this.cookieService.get('user_details'));

    this.userType=this.userDetails.type;

    console.log('+++++>>',this.userType)

    
    /**genarate Add-customer form */

    if(router.url != '/add-customer')
    {

      this.addcustomerForm = this.fb.group({
        id:null,
        email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        phone: [null, Validators.compose([Validators.required, Validators.pattern(/^0|[1-9]\d*$/)])],
        zip: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        address: [null, Validators.required],
        salesrep:['', Validators.required],
        type: ["customer"],
        status:1
      })

    } else {
      this.addcustomerForm = this.fb.group({
        id:null,
        email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        phone: [null, Validators.compose([Validators.required, Validators.pattern(/^0|[1-9]\d*$/)])],
        zip: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        address: [null, Validators.required],
        password: [null, Validators.required],
        conpass: [null, Validators.required],
        salesrep:['', Validators.required],
        type: ["customer"],
        status:1
      },
      {
        validator: this.machpassword('password', 'conpass')
      });

    }
    
      
      if(this.userType == 'salesrep'){
        this.addcustomerForm.controls['salesrep'].patchValue(this.userDetails._id)

      }


    this.getStateList();
    this.getCityList();
    this.editcustomerprofile();
   
  }
  ngOnInit() {

    // salesrep list 

    // this.activatedRouter.data.forEach((res)=>{
    //   let result:any
    //   result=res
    //   this.salesrepList=result.salesreplist.res
    //   console.log('**>>>>>>>>>', this.salesrepList)
    // })

    let data:any;
    data={
      source:'user_view',
      condition: {"type": "salesrep"},
      token:this.cookieService.get('jwtToken')
    }

    this.apiservice.CustomRequest(data,'datalist').subscribe((res)=>{
      let result:any;
      result=res;
      console.log('>>>>>>>>>>',result.res)
      this.salesrepList=result.res
    })

   


  }
  /**Miss Match password check function */
  machpassword(passwordkye: string, confirmpasswordkye: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordkye],
        confirmpasswordInput = group.controls[confirmpasswordkye];
      if (passwordInput.value !== confirmpasswordInput.value) {
        return confirmpasswordInput.setErrors({ notEquivalent: true });
      }
      else {
        return confirmpasswordInput.setErrors(null);
      }
    };
  }
  getStateList() {
    this.apiservice.getJsonObject('assets/data/states.json').subscribe(response => {
      let result: any = {};
      result = response;
      this.stateList = result;
    })
  }
  getCityList() {
    this.apiservice.getJsonObject('assets/data/usa-cities.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.cityList = result;
    })
  }

  /**Submit function */
  addcustomerFormSubmit() {
    for (let x in this.addcustomerForm.controls) {
      this.addcustomerForm.controls[x].markAsTouched();
    }
    if (this.addcustomerForm.valid) {
      console.log('hit1')
      /**check id null or not null */
      if(this.addcustomerForm.value.id==null){
        delete this.addcustomerForm.value.id;
      }
          if (this.addcustomerForm.value.conpass != null) {
          delete this.addcustomerForm.value.conpass;

        }

        /**Api service for insert form */

        var data = { "source": "user", "data": this.addcustomerForm.value }
        this.apiservice.CustomRequest(data, 'addorupdatedata').subscribe((data: any) => {
          console.log(data);
          if (data.status == 'success' && data.update==1) {
          //  console.log("Update customer Successfully");
          //   this.formDirective.resetForm();
          this.router.navigateByUrl('/customer-list-admin');
          }else{
            console.log("Add customer Successfully");
            this.formDirective.resetForm();
            this.router.navigateByUrl('/customer-list-admin');
          }
          
        })
    }
  }

  /**for Edit Customer form */
  editcustomerprofile(){
    if(this.activatedRouter.snapshot.params._id!=null)
    {
      var data = { "source": "user", "condition": {"_id": this.activatedRouter.snapshot.params._id}}
        this.apiservice.CustomRequest(data, 'datalist').subscribe((data: any) => {
          console.log('data',data)

          this.header_text="Edit Customer"
        this.btn_text="Update"
          this.addcustomerForm.patchValue({
            id:data.res[0]._id,
            email:data.res[0].email,
            firstname:data.res[0].firstname,
            lastname:data.res[0].lastname,
            phone:data.res[0].phone,
            zip:data.res[0].zip,
            city:data.res[0].city,
            state:data.res[0].state,
            address:data.res[0].address,
            type:data.res[0].type,
            salesrep:data.res[0].salesrep
          })
        });
    }
  }


  inputUntouched(val: any) {
    this.addcustomerForm.controls[val].markAsUntouched();
  }

}