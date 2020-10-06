import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from './service/address.service';
import { CartService } from './service/cart.service';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('expansion', [
      state('slide', style({
        opacity: 0,
      })),
      state('switch', style({
        transform: 'translateX(30px)',
      })),
      state('slide-up', style({
        transform: 'translateY(-10px)',
        opacity: 0
      })),
      transition('slide =>*', [
        animate(800, keyframes([
          style({
            transform: 'translateY(-20px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateY(40px)',
            opacity: 0.5,
            offset: 0.5
          }),
          style({
            transform: 'translateY(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('*<=>switch', animate(500)),
      transition('*<=>slide-up', animate(300))
    ])]
})

export class AppComponent {

  state1 = 'slide';
  state2 = null;
  state3 = null;

  @HostListener("document:scroll")
  scrollFunction() {
    if (document.documentElement.scrollTop > 0) {
      this.state2 = 'switch';
      this.state3 = 'slide-up'
    } else {
      this.state2 = null;
      this.state3 = null;
    }
  }

  constructor(public router: Router, public userService: UserService,
    public productService: ProductService, private cartService: CartService,
    private address: AddressService) {
  }

  onLogOut() {
    this.userService.userRole = null;
    this.userService.sharedId = null;
    this.cartService.onLoad();
    this.address.addressId = null;
  }
}
