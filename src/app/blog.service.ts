import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient : HttpClient) { }

  logIn(userObj:any){
    let httpHeaders = new HttpHeaders({
      'content-Type' : 'application/json'
    });
    return this.httpClient.post('http://localhost:8080/UserInfo/authentication' ,
    userObj,{headers:httpHeaders});
  }

  userRegister(userObj:any){
    let httpHeaders = new HttpHeaders({
      'content-type' : 'application/json'
    });
    return this.httpClient.post('http://localhost:8080/UserInfo/userinfo',
    userObj,{headers:httpHeaders});
  }

}
