import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BlogService} from "../../blog.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
constructor(
  public router: Router,
  public blogService : BlogService
) { }

ngOnInit(): void{
}
registerForm = new FormGroup({
   firstName: new FormControl(""),
   lastName:  new FormControl(""),
   email:  new FormControl(""),
   mobile: new FormControl(""),
   password:  new FormControl(""),
   rpwd:  new FormControl(""),
});

registerSubmitted(){
  try{
    this.blogService.userRegister(this.registerForm.value).subscribe(data=>{
      alert("User register Successfully");
      setTimeout(()=>{
        this.router.navigate(['/signin']);
      },500)
    })
  }catch(e)
  {
    console.log(e);
  }
  console.log(this.registerForm.value);
}
}
