import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo_project';
  // name = 'any';
  // constructor(){
  //   this.name = '';

  // }
  // SetName(id: number){
  //   switch(id){
  //     case 1:{
  //       this.name="one";
  //       break;
  //     }
  //     case 2:{
  //       this.name="two";
  //       break;
  //     }
  //     case 3:{
  //       this.name="three";
  //       break;
  //     }
  //     default:{
  //       this.name='';
  //       break;
  //     }
  //   }
  // }

  
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
}
