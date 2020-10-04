import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address, AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-updateaddr',
  templateUrl: './updateaddr.component.html',
  styleUrls: ['./updateaddr.component.css']
})
export class UpdateaddrComponent implements OnInit {
  obj1: any;
  customer: Address[];
  message:string;
  constructor(private ser:AddressService,private router:Router) { 
  this.obj1 = this.ser.updateMethod();
  }
  ngOnInit(): any {
  }
  onUpdate(updateaddr:Address): any {
    if(confirm("Are you sure you want to update address?")){
    return this.ser.updateaddr(updateaddr).subscribe(data => {
      this.message = data
    });
  }}}
