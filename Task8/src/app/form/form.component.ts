import { Component, OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormControl ,FormGroup,Validators } from '@angular/forms';
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
            "zip":"",
            "gender":""
           
                }
  }
onSubmit(){
  console.log(this.myForm.value);
}    

  // constructor() { }
  myForm !:FormGroup;
 
  ngOnInit(): void {
    this.myForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      city:new FormControl(null,Validators.required),
      state:new FormControl(null,Validators.required),
      zip:new FormControl(null,[Validators.required, Validators.pattern("[0-9]{6}")] ),
      email: new FormControl(null, [Validators.required,Validators.email]),
      gender:new FormControl()
     
    })
  }

}
