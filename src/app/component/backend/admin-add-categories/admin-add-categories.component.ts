import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';
import { MatDialogRef } from '@angular/material';
import { DialogModalOpenDialog } from '../admin-manage-categories/admin-manage-categories.component';

@Component({
  selector: 'app-admin-add-categories',
  templateUrl: './admin-add-categories.component.html',
  styleUrls: ['./admin-add-categories.component.css']
})
export class AdminAddCategoriesComponent implements OnInit {

  public addyearform: FormGroup;
  public addTypeForm: FormGroup;
  public addMakeform: FormGroup;
  public addModelform: FormGroup;
  public allData: any = {};
  public makeArray: any;
  public typeArray: any;
  public typeYear: any;
  constructor(public route: ActivatedRoute, public apiService: ApiService, public fb: FormBuilder, public router: Router, public dialogRef: MatDialogRef<DialogModalOpenDialog>) {


    let id = route.snapshot.params.id;

    let data: any = {};

    data = { "source": 'manage-categories', condition: { "_id": id } };

    this.apiService.CustomRequest(data, "datalist").subscribe(res => {
      // console.log(res);
      let result: any = {};
      result = res;
      console.log(result.res[0]);
      this.allData = result.res[0];
    });



    this.addTypeForm = this.fb.group({

      TypeName: ['', Validators.required],
      added_on: ['', Validators.required],
      Cars: ['', Validators.required],
      status: [''],
      categoriesType: ["type"]
    })

    this.addMakeform = this.fb.group({

      make_name: ['', Validators.required],
      added_on: ['', Validators.required],
      Cars: ['', Validators.required],
      status: [''],
      categoriesType: ["make"]
    })

    this.addModelform = this.fb.group({

      model_name: ['', Validators.required],
      added_on: ['', Validators.required],
      make_name: ['', Validators.required],
      Cars: ['', Validators.required],
      status: [null],
      year: ['', Validators.required],
      type: ['', Validators.required],
      categoriesType: ["model"]
    })

    this.addyearform = this.fb.group({

      added_on: ['', Validators.required],
      year: ['', Validators.required],
      Cars: ['', Validators.required],
      status: [null],
      categoriesType: ["year"]
    })

  }

  ngOnInit() {

    //make drop down
    let data: any = {};

    data = { "source": 'manage-make', condition: { "categoriesType": "make" } };

    this.apiService.CustomRequest(data, "datalist").subscribe(res => {

      let result: any = {};
      result = res;
      this.makeArray = result.res;
      console.log(this.makeArray);
    })

    //type dropdown
    let dataType: any;
    dataType = { "source": 'manage-type', condition: { "categoriesType": "type" } };

    this.apiService.CustomRequest(dataType, "datalist").subscribe(res => {

      let result: any = {};
      result = res;
      this.typeArray = result.res;
      console.log("@@>>>", this.typeArray);
    })


    //year dropdown

    let dataYear: any;
    dataYear = { "source": 'manage-year', condition: { "categoriesType": "year" } };

    this.apiService.CustomRequest(dataYear, "datalist").subscribe(res => {

      let result: any = {};
      result = res;
      this.typeYear = result.res;
      console.log("@@>>>", this.typeYear);
    })

  }


  addTypeSubmit() {
    console.log(this.addTypeForm.value);
    let endpoint: any = "addorupdatedata";
    let data: any = {
      data: this.addTypeForm.value,
      source: "manage-type",
    };
    this.apiService.CustomRequest(data, endpoint).subscribe(res => {
      console.log(res);
      this.dialogRef.close();

      this.router.navigateByUrl('/manage-type');
    })
  }
  addMakeSubmit() {
    console.log(this.addMakeform.value);
    let endpoint: any = "addorupdatedata";
    let data: any = {
      data: this.addMakeform.value,
      source: "manage-make",
    };
    this.apiService.CustomRequest(data, endpoint).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
      this.router.navigateByUrl('/manage-make');
    })
  }
  addModelSubmit() {
    console.log(this.addModelform.value);
    let endpoint: any = "addorupdatedata";
    let data: any = {
      data: this.addModelform.value,
      source: "manage-model",
    };
    this.apiService.CustomRequest(data, endpoint).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
      this.router.navigateByUrl('/manage-model');
    })
  }
  addYearSubmit() {
    console.log(this.addyearform.value);
    let endpoint: any = "addorupdatedata";
    let data: any = {
      data: this.addyearform.value,
      source: "manage-year",
    };
    this.apiService.CustomRequest(data, endpoint).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
      this.router.navigateByUrl('/manage-year');
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
