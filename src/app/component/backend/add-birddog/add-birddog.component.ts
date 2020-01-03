import { Component, OnInit, ViewChildren, ViewChild,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
 
@Component({
  selector: 'app-add-birddog',
  templateUrl: './add-birddog.component.html',
  styleUrls: ['./add-birddog.component.css']
})
export class AddBirddogComponent implements OnInit {
public salesrep_list:any;
public addbirddogForm: FormGroup;
public stateList: any;
public cityList: any;
public header_text:any="Add Birddog"
public btn_text:any="Submit"
@ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
constructor(public activatedRouter:ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder,public dialog: MatDialog,public router:Router,public cookieService:CookieService) { 
    /**genarate Add-birddog form */

    if(router.url != '/add-birddog'){

      this.addbirddogForm = this.fb.group({
        id:null,
        email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        phone: [null, Validators.compose([Validators.required, Validators.pattern(/^0|[1-9]\d*$/)])],
        zip: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        address: [null, Validators.required],
        assign_salesrep:[null,Validators.required],
        username:[null,Validators.required],
        type: ["birddog"],
        status:1
      })

    } else {
      this.addbirddogForm = this.fb.group({
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
        assign_salesrep:[null,Validators.required],
        username:[null,Validators.required],
        type: ["birddog"],
        status:1
      },
      {
      validator: this.machpassword('password', 'conpass')
    });

    }

    this.getStateList();
    this.getCityList();
    this.editBirddogProfile();
}

  ngOnInit() {

//http service for saleslist 

    let data:any;
    data={
      source:"user_view",
      condition: {
        type: "salesrep"
      },
      token:this.cookieService.get('jwtToken')
    }
    this.apiservice.postDatawithoutToken("datalist",data).subscribe((res)=>{
      let result:any;
      result=res;
      this.salesrep_list=result.res;
    console.log('>>>>>', this.salesrep_list)
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
addbirddogFormSubmit(){
  for (let x in this.addbirddogForm.controls) {
    this.addbirddogForm.controls[x].markAsTouched();
  }
  if (this.addbirddogForm.valid) {
    /**check id null or not null */
    if(this.addbirddogForm.value.id==null){
      delete this.addbirddogForm.value.id;
    }
        if (this.addbirddogForm.value.conpass != null) {
        delete this.addbirddogForm.value.conpass;

      }
      console.log(this.addbirddogForm.value);

      /**Api service for insert form */

      var data = { "source": "user", "data": this.addbirddogForm.value }
      this.apiservice.CustomRequest(data, 'addorupdatedata').subscribe((data: any) => {
        console.log(data);
        if (data.status == 'success' && data.update==1) {
         console.log("Update birddog Successfully");
          this.formDirective.resetForm();
          this.router.navigateByUrl('/birddog-list');
        }else{
          console.log("Add birddog Successfully");
          this.formDirective.resetForm();
          this.router.navigateByUrl('/birddog-list');
        }
        
      })
  
  }
}

//for edit birddog

editBirddogProfile(){
  if(this.activatedRouter.snapshot.params._id!=null)
  {
    var data = { "source": "user", "condition": {"_id": this.activatedRouter.snapshot.params._id}}
      this.apiservice.CustomRequest(data, 'datalist').subscribe((data: any) => {
        this.header_text="Edit Birddog"
        this.btn_text="Update"
        this.addbirddogForm.patchValue({
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
          assign_salesrep:data.res[0].assign_salesrep,
          username:data.res[0].username

          
        })
      });
  }
}

/**blur unction */
inputUntouched(val: any) {
  this.addbirddogForm.controls[val].markAsUntouched();
}
}
