import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHidden: boolean = true;


  constructor(public router: Router,public userService:UserService,
    public productService:ProductService) {
  }

}
