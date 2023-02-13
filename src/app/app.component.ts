import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormArray, Validators } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
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

}
