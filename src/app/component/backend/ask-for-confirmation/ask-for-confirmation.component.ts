import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ask-for-confirmation',
  templateUrl: './ask-for-confirmation.component.html',
  styleUrls: ['./ask-for-confirmation.component.css']
})
export class AskForConfirmationComponent implements OnInit {
public editorconfig: any = [];
public askForConfirmation: FormGroup;
  constructor(public fb:FormBuilder) {
    this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
    this.askForConfirmation = this.fb.group({
      topPart: [''],
      firstname:['', Validators.required]
    }) 
  }

  ngOnInit() {
  }
    askForConfirmationSubmit(){
      for(let x in this.askForConfirmation.controls){
        this.askForConfirmation.contains[x].markAsTouched();
      }
      console.log(this.askForConfirmation.value )
    }

    /**blur function */
    inputUntouched(val: any) {
      this.askForConfirmation.controls[val].markAsUntouched();
    }

}
