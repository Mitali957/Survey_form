import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {BlogService} from "../../blog.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(
    public router: Router,
    public blogService : BlogService
  ){

  }
  title = 'mainProject';
  email = '';
  password = '';

  ngOnInit() {

  }
  logInUser() {
    try{
      console.log(this.email,this.password)
      this.blogService.logIn({email:this.email,password:this.password}).subscribe(data =>{
        let jsString = JSON.stringify(data);
        let response = JSON.parse(jsString).msg;
        if(response=="Authorizied")
        {
          alert("User Login Successfully");
          setTimeout(()=>{
            this.router.navigate(['/mainpage']);
          },500)
         
        }else{
          alert("Unauthorized");
          setTimeout(()=>{
            this.router.navigate(['/signin']);
          },500)
          
        }
        
      })
    }catch(e)
    {
      alert("Something Went Wrong");
      console.log(e);
    }
    
  }

}

