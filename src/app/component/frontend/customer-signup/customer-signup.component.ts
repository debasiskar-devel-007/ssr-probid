import { Component, OnInit, ViewChildren, ViewChild,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
import {CookieService} from 'ngx-cookie-service';



export interface DialogData {
 
}

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  public customerSignUpForm: FormGroup;
  public stateList: any;
  public cityList: any;
  public term_msg: any = '';
  public rep_id: string = '';
  public salesrepList:any;
  public img: string ='';
  public message:string='Submitted Successfully'


  constructor(public activatedRouter:ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder,public dialog: MatDialog,private readonly meta: MetaService,public cookieService:CookieService, public router: Router ) {

    this.meta.setTitle('ProBid Auto - Sales Rep SignUp');
    this.meta.setTag('og:description', 'Sales Reps can Sign Up to create their account with the ProBid Auto Back-office and make massive commissions by helping customers locate and buy the best Pre-Owned vehicles of their desires.');
    this.meta.setTag('twitter:description', 'Sales Reps can Sign Up to create their account with the ProBid Auto Back-office and make massive commissions by helping customers locate and buy the best Pre-Owned vehicles of their desires.');    
    this.meta.setTag('og:keyword', 'ProBid Auto Sales Rep SignUp, Sign Up With ProBid Auto, Join ProBid Auto');
    this.meta.setTag('twitter:keyword', 'ProBid Auto Sales Rep SignUp, Sign Up With ProBid Auto, Join ProBid Auto');
    this.meta.setTag('og:title', 'ProBid Auto - Sales Rep SignUp');
    this.meta.setTag('twitter:title', 'ProBid Auto - Sales Rep SignUp');
    this.meta.setTag('og:type', 'website');
    
    this.meta.setTag('twitter:image', 'https://dev.probidauto.com/assets/images/logomain.png');



    this.activatedRouter.params.subscribe(params=>{
      console.log('++++++',params['id']);
      if (params['id'] != '' || params['id'] != null) {
        this.rep_id = params['id'];
        console.log(params['img'])
       this.img = params['img']
      }
    });
    if (this.img != '') {
      this.meta.setTag('og:image', 'https://dev.probidauto.com/assets/images/'+this.img);
    } else {
      this.meta.setTag('og:image', 'https://dev.probidauto.com/assets/images/logomain.png');
    }
    
    /**genarate customer-signUp form */
    this.customerSignUpForm = this.fb.group({
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
      check: [false, Validators.required],
      salesrep:['',Validators.required],
      type: ["customer"],
      status:0
    }, {
      validator: this.machpassword('password', 'conpass')
    });





    this.getStateList();
    this.getCityList();
    this.editcustomerprofile();
   
  }


  ngOnInit() {

    //for salesrep list
    let data:any;
    data={
      source:'user_view',
      condition: {"type": "salesrep"}
      
    }

    this.apiservice.getDatalistWithToken(data,'datalistwithouttoken').subscribe((res)=>{
      let result:any;
      result=res;
      console.log('>>>>>>>>>>',result.res)
      this.salesrepList=result.res
      console.log('>>>>>>>>>>', this.salesrepList)


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


  openModal(){
    const dialogRef= this.dialog.open(customerSignUpsuccessDialog, {
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


  /**Submit function */
  customerSignUpFormSubmit() {

    for (let x in this.customerSignUpForm.controls) {
      this.customerSignUpForm.controls[x].markAsTouched();
    }
    if (this.customerSignUpForm.valid) {
      /**check id null or not null */
      if(this.customerSignUpForm.value.id==null){
        delete this.customerSignUpForm.value.id;
      }
      /**check term and codition */
      if (this.customerSignUpForm.value.check == true) {

        if (this.customerSignUpForm.value.conpass != null) {
          delete this.customerSignUpForm.value.conpass;
          delete this.customerSignUpForm.value.check;
        }
        // console.log(this.customerSignUpForm.value);

        /**Api service for insert form */
        let formdata: any = this.customerSignUpForm.value;
        if (this.rep_id != null && this.rep_id != '') {
          this.customerSignUpForm.value.salesrep = this.rep_id;
          formdata = this.customerSignUpForm.value;
          console.log(formdata);
        }
        var data = { "source": "user", "data": formdata }
        this.apiservice.CustomRequest(data, 'addorupdatedatawithouttoken').subscribe((data: any) => {
          if (data.status == 'success') {
            this.openModal();
            this.formDirective.resetForm();
          }
          // console.log(data);
        })
      }
    }
    else {
      this.term_msg = 'Please Accept Terms And Conditions';
    }
  }

  /**for edit */
  editcustomerprofile(){
    if(this.activatedRouter.snapshot.params._id!=null)
    {
      var data = { "source": "user", "condition": {"_id": this.activatedRouter.snapshot.params._id}}
        this.apiservice.CustomRequest(data, 'datalist').subscribe((data: any) => {
          this.customerSignUpForm.patchValue({
            id:data.res[0]._id,
            email:data.res[0].email,
            firstname:data.res[0].firstname,
            lastname:data.res[0].lastname,
            phone:data.res[0].phone,
            zip:data.res[0].zip,
            city:data.res[0].city,
            state:data.res[0].state,
            address:data.res[0].address,
            check: [false, Validators.required],
            type:data.res[0].type,
            salesrep:data.res[0].salesrep
          })
        });
    }
  }


  inputUntouched(val: any) {
    this.customerSignUpForm.controls[val].markAsUntouched();
  }
  gotoenroll() {
    document.querySelector('.signupformdiv').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/**success Modal */
@Component({
  selector: 'coming',
   templateUrl: './success.html',
})
export class customerSignUpsuccessDialog {

  constructor(
    public dialogRef: MatDialogRef<customerSignUpsuccessDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}