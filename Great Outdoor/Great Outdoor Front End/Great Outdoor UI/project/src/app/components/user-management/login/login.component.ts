import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { Userdata, UserService } from 'src/app/service/user.service';
import { AddressService } from '../../../service/address.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  buttonText = 'username';
  user: any;
  constructor(private ser: UserService, private router: Router,
    private cartService: CartService, private addressService: AddressService) { }

  msg: string = "Enter Correct UserName and Password";
  ngOnInit(): void {
  }

  hideloginpage() {

    document.getElementById("loginpage").hidden = true

  }
  onSubmit(u: Userdata) {

    this.ser.login(u).subscribe(
      user => {
        this.user = user;
        this.ser.sharedId = this.user.userid;
        if (this.user.usertype == "admin") {
          this.ser.userRole = 'admin';
          this.router.navigate(['/home']);
        }
        else if (this.user.usertype == "customer") {
          this.ser.userRole = 'customer';
          this.router.navigate(['home']);
          this.cartService.onLoad();
          this.addressService.getAddress(user.username).subscribe(
            (address) => {
              this.addressService.addressId = address.addr_id;
              console.log(this.addressService.addressId);
            }
          )

        }
        else if (this.user.usertype == "invalid") {
          alert("Enter correct credentials");
        }

      }
    );
  }
}
