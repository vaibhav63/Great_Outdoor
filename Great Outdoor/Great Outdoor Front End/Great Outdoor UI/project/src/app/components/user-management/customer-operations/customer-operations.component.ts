import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-customer-operations',
  templateUrl: './customer-operations.component.html',
  styleUrls: ['./customer-operations.component.css']
})
export class CustomerOperationsComponent {
  msg:any;
  
  constructor(private myservice: UserService,private router: Router) { 

    this.msg=this.myservice.sharedId;
  }
}