import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-customeroperations',
  templateUrl: './customeroperations.component.html',
  styleUrls: ['./customeroperations.component.css']
})
export class CustomeroperationsComponent implements OnInit {

  constructor(public service:UserService,public router:Router) { }

  ngOnInit(): void {
  }
   
}
