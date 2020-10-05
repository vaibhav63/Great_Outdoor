import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-customeroperations',
  templateUrl: './customeroperations.component.html',
  styleUrls: ['./customeroperations.component.css']
})
export class CustomeroperationsComponent{
  msg:any;
  
  constructor(private myservice: UserService,private router: Router) { 

    this.msg=this.myservice.sharedId;
  }
}