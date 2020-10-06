import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address, AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-address-creation',
  templateUrl: './address-creation.component.html',
  styleUrls: ['./address-creation.component.css']
})
export class AddressCreationComponent implements OnInit {

  message:string;
  constructor(private ser:AddressService,private router:Router) { }
  ngOnInit(): void {
  }
  onSubmit(Addrcreation:Address):any{
    console.log(Addrcreation);
    if(confirm("Are you sure you want to enter these address details?")){
     this.ser.Addrcreation(Addrcreation).subscribe(data => {
      this.message=data});
}
}
}