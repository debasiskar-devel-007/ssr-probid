import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-salesrep',
  templateUrl: './add-salesrep.component.html',
  styleUrls: ['./add-salesrep.component.css']
})
export class AddSalesrepComponent implements OnInit {
  public addsalesrepForm: FormGroup;
  public stateList: any;
  public cityList: any;
  public header_text: any = "Add Salesrep"
  public btn_text: any = "Submit"

  public timezone:any;


  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  constructor(public activatedRouter: ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder, public dialog: MatDialog, public router: Router) {

    /**genarate Add-salesrep form */
    if (router.url != '/add-salesrep') {
      this.addsalesrepForm = this.fb.group({
        id: null,
        email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        phone: [null, Validators.compose([Validators.required, Validators.pattern(/^0|[1-9]\d*$/)])],
        zip: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        address: [null, Validators.required],
        username: [null, Validators.required],
        companyname: ['', Validators.required],
        timezone:['',Validators.required],
        webiner:['',Validators.required],
        type: ["salesrep"],
        status: 1

      })

    } else {
      this.addsalesrepForm = this.fb.group({
        id: null,
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
        username: [null, Validators.required],
        companyname: ['', Validators.required],
        timezone:['',Validators.required],
        webiner:['',Validators.required],

        type: ["salesrep"],
        status: 1
      },
        {
          validator: this.machpassword('password', 'conpass')

        });
    }



    this.getStateList();
    this.getCityList();
    this.getTimezone();
    this.editsalesrepprofile();
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

  /**Submit function */
  addsalesrepFormSubmit() {
    for (let x in this.addsalesrepForm.controls) {
      this.addsalesrepForm.controls[x].markAsTouched();
    }
    // console.log(this.addsalesrepForm.value);
    if (this.addsalesrepForm.valid) {
      /**check id null or not null */
      if (this.addsalesrepForm.value.id == null) {
        delete this.addsalesrepForm.value.id;
      }

      if (this.addsalesrepForm.value.conpass != null) {
        delete this.addsalesrepForm.value.conpass;

      }
      console.log(this.addsalesrepForm.value);

      /**Api service for insert form */

      var data = { "source": "user", "data": this.addsalesrepForm.value }
      this.apiservice.CustomRequest(data, 'addorupdatedata').subscribe((data: any) => {
        console.log(data);
        if (data.status == 'success' && data.update == 1) {
          console.log("Update salesrep Successfully");
          this.formDirective.resetForm();
          this.router.navigateByUrl('/salesrep-list-admin')

        } else {
          console.log("Add salesrep Successfully");
          this.formDirective.resetForm();
          this.router.navigateByUrl('/salesrep-list-admin')
        }
      })
    }
  }

  /**update function */
  editsalesrepprofile() {
    if (this.activatedRouter.snapshot.params._id != null) {
      var data = { "source": "user", "condition": { "_id": this.activatedRouter.snapshot.params._id } }
      this.apiservice.CustomRequest(data, 'datalist').subscribe((data: any) => {
        this.header_text = "Edit Salesrep"
        this.btn_text = "Update"
        this.addsalesrepForm.patchValue({
          id: data.res[0]._id,
          email: data.res[0].email,
          firstname: data.res[0].firstname,
          lastname: data.res[0].lastname,
          phone: data.res[0].phone,
          zip: data.res[0].zip,
          city: data.res[0].city,
          state: data.res[0].state,
          address: data.res[0].address,
          username: data.res[0].username,
          type: data.res[0].type,
          companyname: data.res[0].companyname,
          timezone:data.res[0].timezone,
          webiner:data.res[0].webiner

        })
      });
    }
  }
  /**blur function */
  inputUntouched(val: any) {
    this.addsalesrepForm.controls[val].markAsUntouched();
  }
}
