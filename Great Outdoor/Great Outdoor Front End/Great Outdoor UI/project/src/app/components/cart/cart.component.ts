import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { PaymentGatewayComponent } from '../payment-gateway/payment-gateway.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(public cartService: CartService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.cartService.subTotal = this.cartService.findSubTotal();
    this.cartService.totalQuantity = this.cartService.findTotalQuantity();
  };

  onProceedToPay() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.backdropClass = 'backdropBackground';
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.data = { amount: this.cartService.subTotal, quantity: this.cartService.totalQuantity };
    this.dialog.open(PaymentGatewayComponent, dialogConfig);
  }

}
