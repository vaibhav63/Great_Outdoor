import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  product: Product;
  specificationArray = [];
  minValue: number = 1;
  maxValue: number = 10;
  quantity: number = 1;

  constructor(private dialogRef: MatDialogRef<ProductComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    public cartService: CartService) {
    this.product = data.product;
    this.specificationArray = this.product['productSpecification'].split(',');
    this.maxValue = this.product.productQuantity;
  }

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
    const cartItem = new Cart(1, '11', this.product.productId,
      this.product.productPrice * this.quantity, this.quantity);
    this.cartService.addToCart(cartItem);
  }
}
