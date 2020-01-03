import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-add-admin-categories',
  templateUrl: './add-admin-categories.component.html',
  styleUrls: ['./add-admin-categories.component.css']
})
export class AddAdminCategoriesComponent implements OnInit {
  public addyearform: FormGroup;
  public addType: FormGroup;
  public addMakeform: FormGroup;
  public addModelform: FormGroup;

  public makeArray: any;
  public typeArray: any;
  public typeYear: any;
  public typeModel:any;

  public dataType: any=null;
  public typeChacking: any ;
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  constructor(public route: ActivatedRoute, public apiService: ApiService, public fb: FormBuilder, public router: Router) {



    this.addType = this.fb.group({
     
      TypeName: ['', Validators.required],
      added_on: ['', Validators.required],
      Cars: ['', Validators.required],
      status: [''],
      categoriesType: ["type"]
    })

    this.addMakeform = this.fb.group({
     
      make_name: ['', Validators.required],
      added_on: ['', Validators.required],
      model_name:['',Validators.required],
      Cars: ['', Validators.required],
      status: [''],
      categoriesType: ["make"]
    })

    this.addModelform = this.fb.group({
     
      model_name: ['', Validators.required],
      added_on: ['', Validators.required],
      make_name: ['', Validators.required],
      Cars: ['', Validators.required],
      type:[],
      year:[],
      status: [null],
      categoriesType: ["model"]
    })

    this.addyearform = this.fb.group({
      
      added_on: ['', Validators.required],
      year: ['', Validators.required],
      Cars: ['', Validators.required],
      status: [null],
      categoriesType: ["year"]
    })


    let id = route.snapshot.params.id;

    let data: any = {};
    if (route.snapshot.routeConfig.path == 'editmake/:id') {
      data = { "source": 'manage-make', condition: { "_id": id } };
    }
    if (route.snapshot.routeConfig.path == 'edittype/:id') {
      data = { "source": 'manage-type', condition: { "_id": id } };
    }
    if (route.snapshot.routeConfig.path == 'editmodel/:id') {
      data = { "source": 'manage-model', condition: { "_id": id } };
    }
    if (route.snapshot.routeConfig.path == 'edityear/:id') {
      data = { "source": 'manage-year', condition: { "_id": id } };
    }

    

    this.apiService.CustomRequest(data,"datalist").subscribe(res => {
      // console.log(res);
let result: any = {};
      result = res;
       if(result.resc>0){
        this.dataType = result;
        this.dataType = this.dataType.res[0];
        console.log(this.dataType);
       
  if (this.dataType.categoriesType === 'type') {
    console.log(this.dataType.categoriesType);  
    this.addType = this.fb.group({
      id: [this.dataType._id],
      TypeName: [this.dataType.TypeName, Validators.required],
      added_on: [this.dataType.added_on, Validators.required],
      Cars: [this.dataType.Cars, Validators.required],
      status: [this.dataType.status],
      categoriesType: [this.dataType.categoriesType]
    })
  } else if(this.dataType.categoriesType == 'make') {
    this.addMakeform = this.fb.group({
      id: [this.dataType._id],
      make_name: [this.dataType.make_name, Validators.required],
      added_on: [this.dataType.added_on, Validators.required],
      Cars: [this.dataType.Cars, Validators.required],
      model_name:[this.dataType.model_name, Validators.required],
      status: [this.dataType.status],
      categoriesType: [this.dataType.categoriesType]
    })
  }else if(this.dataType.categoriesType == 'model') {
    this.addModelform = this.fb.group({
      id: [this.dataType._id],
      model_name: [this.dataType.model_name, Validators.required],
      added_on: [this.dataType.added_on, Validators.required],
      make_name: [this.dataType.make_name, Validators.required],
      Cars: [this.dataType.Cars, Validators.required],
      status: [this.dataType.status],
      type:[this.dataType.type],
      year:[this.dataType.year],
      categoriesType: [this.dataType.categoriesType]
    })
  }else if (this.dataType.categoriesType == 'year') {
    this.addyearform = this.fb.group({
      id: [this.dataType._id],
      added_on: [this.dataType.added_on, Validators.required],
      year: [this.dataType.year, Validators.required],
      Cars: [this.dataType.Cars, Validators.required],
      status: [this.dataType.status],
      categoriesType: [this.dataType.categoriesType]
    })
  }
       }
      

      
    });

  }

  ngOnInit() {
    // this.route.data.forEach(data=>{
    //   let result:any;
    //   result=data;
    //   console.log(result,'+++++++++++')
    // })


    
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

    //model dropdown
    let dataModel: any;
    dataModel = { "source": 'manage-model', condition: { "categoriesType": "model" } };

    this.apiService.CustomRequest(dataModel, "datalist").subscribe(res => {

      let result: any = {};
      result = res;
      this.typeModel = result.res;
      console.log("@++++>>>", this.typeModel);
    })


  }

  resetForm() {
    this.formDirective.resetForm(); 
  }
   
  addTypeSubmit() {
    console.log(this.addType.value);
    let endpoint: any = "addorupdatedata";
    let data: any = {
      data: this.addType.value,
      source: "manage-type",
    };
    this.apiService.CustomRequest(data, endpoint).subscribe(res =>{
      console.log(res);
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
    this.apiService.CustomRequest(data, endpoint).subscribe(res =>{
      console.log(res);
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
    this.apiService.CustomRequest(data, endpoint).subscribe(res =>{
      console.log(res);
      this.router.navigateByUrl('/manage-model');
    })
  }
  addyearSubmit() {
    console.log(this.addyearform.value);
    let endpoint: any = "addorupdatedata";
    let data: any = {
      data: this.addyearform.value,
      source: "manage-year",
    };
    this.apiService.CustomRequest(data, endpoint).subscribe(res =>{
      console.log(res);
      this.router.navigateByUrl('/manage-year');
    })
  }
}
