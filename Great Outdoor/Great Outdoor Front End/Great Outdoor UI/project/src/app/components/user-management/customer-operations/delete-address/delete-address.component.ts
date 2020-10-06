import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address, AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.css']
})
export class DeleteAddressComponent implements OnInit {

  message:string;
  constructor(private ser:AddressService,private router:Router) { }
  ngOnInit(): any {
  }
  onSubmit(deleteaddr:Address)
  {
    if(confirm("Are you sure you want to delete?")){
    this.ser.deleteaddr(deleteaddr.addr_id).subscribe(data => {
      this.message = data
    });
  }
}
}
