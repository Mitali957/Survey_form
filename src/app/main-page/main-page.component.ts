import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, copyArrayItem} from '@angular/cdk/drag-drop';
import { FormBuilder,FormGroup, FormArray,FormControl, RequiredValidator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Survey}  from  "../model/Survey";
import {Question} from "../model/Question";
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
 
  components = ['Text Area', 'Single Choice Question', 'Multiple Choice Question'];
  survey = new Survey([])
  question = new Question("", "", [])
  
  pushInArray(option:any){
    this.question.options.push(option.value)
    option.value = ""
  }


  Form = [ 'Check e-mail'];

  onDelete(deleteMe:any){
    this.Form.splice(deleteMe, 1)
  }

drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    copyArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}
ngOnInit(){
  this.surveyForm = this._fb.group({
    title : ["", Validators.required],
    email : ["", Validators.required],
    questions: this._fb.array([])

  })
}
public userForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.userForm = this._fb.group({
      address: this._fb.array([this.addAddressGroup()])
    });
  }
  //Append Fields Set
  private addAddressGroup(): FormGroup {
    return this._fb.group({
      street: [],
      city: [],
      state: []
    });
  }
  //Add Fields
  addAddress(): void {
    this.addressArray.push(this.addAddressGroup());
  }
 
  //Remove Fields
  removeAddress(index: number): void {
    this.addressArray.removeAt(index);
  }
  //Fields Array
  get addressArray(): FormArray {
    return <FormArray>this.userForm.get('address');
  }


 public surveyForm = new FormGroup({
    title : new FormControl(''),
    email: new FormControl(''),
    questions :new FormControl({
        question: new FormControl({
          promt : new FormControl(""),
          type : new FormControl(""),
          options : new FormControl({
             option : new FormControl("")
          })
        })
    })
    
  })

  

  // patch(){
  //   const control = <FormArray>this.userForm.get('surveyForm.questions');
  // this.surveyForm.questions.array.forEach(element => {
    
  // });   orEach(x => {
  //   control.push(this.patchValues(x.label, x.value))
  // });
  // }

}





