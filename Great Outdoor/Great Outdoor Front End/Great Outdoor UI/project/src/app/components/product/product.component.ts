import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from 'src/app/service/cart.service';
import { CartDetails } from '../cart/cart.component';
import { ProductData } from '../dashboard/product-management/product-management.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductData;
  specificationArray = [];
  minValue: number = 1;
  maxValue: number = 10;
  quantity: number = 1;


  constructor(private dialogRef: MatDialogRef<ProductComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    public cartService: CartService) {
    this.product = data.product;
    this.specificationArray = this.product['specification'].split(',');
    this.maxValue = this.product.quantity;
  }

  ngOnInit() { }


  plus() {
    if (this.quantity != this.maxValue) {
      this.quantity += 1;
    }
  }

  minus() {
    if (this.quantity != this.minValue) {
      this.quantity -= 1;
    }
  }

  addToCart() {

    this.dialogRef.close();
    const cartItem: CartDetails = {
      cartId: 1, userId: '11', productId: this.product.id,
      cartItemPrice: this.product.price * this.quantity, quantity: this.quantity
    };
    this.cartService.addToCart(cartItem);
  }
}
