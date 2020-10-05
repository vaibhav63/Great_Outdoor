import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userRole:string=null;
  sharedId:string;
  
  constructor(private ser:HttpClient) { }
  
  public addUser(adduser: Userdata) {
    console.log("ins service add");
    console.log(adduser);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.post("http://localhost:8000/admin/addUser", adduser,  { headers, responseType: 'text'});
  }

  public Productmasterlist():Observable<Array<Userdata>> {
    console.log("ins service add");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.get<Array<Userdata>>("http://localhost:8000/admin/Productmasterlist");
  }


  login(u:Userdata):Observable<any>{
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.put("http://localhost:8000/admin/loginUser", u);
  }



}
export class Userdata{
  userid:number;
  username:string;
  usertype:string;
  userpassword:string;
  userphone:number;
  useremail:string;
}