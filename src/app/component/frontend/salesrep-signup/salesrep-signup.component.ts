import {Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { MetaService } from '@ngx-meta/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export interface DialogData {
  data:any
 
}

@Component({
  selector: 'app-salesrep-signup',
  templateUrl: './salesrep-signup.component.html',
  styleUrls: ['./salesrep-signup.component.css']
})
export class SalesrepSignupComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  public salesSignUpForm: FormGroup;
  public stateList: any;
  public cityList: any;
  public timezone: any;
  public term_msg: any;
  public message:any='Submitted Successfully'
  constructor(public activatedRouter:ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder,public dialog: MatDialog,private readonly meta: MetaService,public cookieService:CookieService ,public router:Router) {

    this.meta.setTitle('ProBid Auto - Sales Rep SignUp');
    this.meta.setTag('og:description', 'Sales Reps can Sign Up to create their account with the ProBid Auto Back-office and make massive commissions by helping customers locate and buy the best Pre-Owned vehicles of their desires.');
    this.meta.setTag('twitter:description', 'Sales Reps can Sign Up to create their account with the ProBid Auto Back-office and make massive commissions by helping customers locate and buy the best Pre-Owned vehicles of their desires.');    
    this.meta.setTag('og:keyword', 'ProBid Auto Sales Rep SignUp, Sign Up With ProBid Auto, Join ProBid Auto');
    this.meta.setTag('twitter:keyword', 'ProBid Auto Sales Rep SignUp, Sign Up With ProBid Auto, Join ProBid Auto');
    this.meta.setTag('og:title', 'ProBid Auto - Sales Rep SignUp');
    this.meta.setTag('twitter:title', 'ProBid Auto - Sales Rep SignUp');
    this.meta.setTag('og:type', 'website');
    if (this.cookieService.get('shareIngUrl') != null) {
      this.meta.setTag('og:image', this.cookieService.get('shareIngUrl'));
    } else {
      this.meta.setTag('og:image', 'https://dev.probidauto.com/assets/images/logomain.png');
    }
    
    this.meta.setTag('twitter:image', 'https://dev.probidauto.com/assets/images/logomain.png');




    /**genarate Sales Ref-signUp form */
    this.salesSignUpForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      phone: [null, Validators.required],
      zip: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      address: [null, Validators.required],
      password: [null, Validators.required],
      conpass: [null, Validators.required],
      username: [null, Validators.required],
      companyname: [null, Validators.required],
      webiner: [null],
      timezone: [null],
      check: [false, Validators.required],
      type: ["salesrep"],
      status:0
    }, {
      validator: this.machpassword('password', 'conpass')
    });

    this.getStateList();
    this.getCityList();
    this.getTimezone();
  }

  ngOnInit() {
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

  getTimezone() {
    this.apiservice.getJsonObject('assets/data/timezone.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.timezone = result;
    })
  }

  openModal(){
   const dialogRef= this.dialog.open(salesSignUpModalComponent, {
      width: '250px',
      data:this.message
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result == 'ok'){

      this.router.navigateByUrl('/login')

      }

    });
  }


  /**Sales Ref Submit function */
  salesSignUpFormSubmit() {
      for (let x in this.salesSignUpForm.controls) {
        this.salesSignUpForm.controls[x].markAsTouched();
      }


    if (this.salesSignUpForm.valid) {
      /**Checkbox check */
      if (this.salesSignUpForm.value.check == true) {

        if (this.salesSignUpForm.value.conpass != null) {
          delete this.salesSignUpForm.value.conpass;
          delete this.salesSignUpForm.value.check;
        }
        /**Api service for insert form */
        
        var data = { "source": "user", "data": this.salesSignUpForm.value }
        this.apiservice.CustomRequest(data, 'addorupdatedatawithouttoken').subscribe((data: any) => {
          if (data.status == 'success') {
           this.openModal();
            this.formDirective.resetForm();
          }
          // console.log(data);
        })
        // console.log(this.salesSignUpForm.value);
      }
      else {
        this.term_msg = 'Please accept terms';
      }
    }

  }

  /**blur function */
  inputUntouched(val: any) {
    this.salesSignUpForm.controls[val].markAsUntouched();
  }

  gotoenroll() {
    document.querySelector('.signupformdiv').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
}


/**success Modal */
@Component({
  selector: 'app-success',
   templateUrl: './success.html',
})
export class salesSignUpModalComponent {

  constructor(
    public dialogRef: MatDialogRef<salesSignUpModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}