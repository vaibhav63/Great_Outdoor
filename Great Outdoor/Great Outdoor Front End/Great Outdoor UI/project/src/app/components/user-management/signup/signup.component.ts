import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Userdata, UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message:string;
  constructor(private ser:UserService,private router:Router) { }
  ngOnInit(): void {
  }
  
  hideloginpage(){

    document.getElementById("loginpage").hidden=true
  
  }
  onSubmit(adduser:Userdata):any{
    console.log(adduser+"from here");
     this.ser.addUser(adduser).subscribe(data => {
      this.message=data});
  
   
  }

}
