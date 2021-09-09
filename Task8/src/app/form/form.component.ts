import { Component, OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public input:any;
  public constructor(){
          this.input={ 
            "name":"",
            "email":"",
            "city":"",
            "state":"",
            "zip":""
          
           
                }
  }
onSubmit(){
  console.log(this.input);
}
  // constructor() { }

  ngOnInit(): void {
  }

}
