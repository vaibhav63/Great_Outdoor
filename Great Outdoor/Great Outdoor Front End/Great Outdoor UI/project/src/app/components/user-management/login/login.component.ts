import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userdata, UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  buttonText='username';
  constructor(private ser:UserService,private router:Router) { }

  msg:string="Enter Correct UserName and Password";
  ngOnInit(): void {
  }

  hideloginpage(){

    document.getElementById("loginpage").hidden=true
  
  }
  onSubmit(u:Userdata){
   
    this.ser.login(u).subscribe(
      users=>{

        this.ser.isLogin=true;
        if(users=="admin")
            this.router.navigate(['app-adminoperations']);
        else if(users=="customer")
            this.router.navigate(['app-customeroperations']);
        else if(users=="invalid")
          alert("Enter correct credentials");
      }
    );
  }
}
