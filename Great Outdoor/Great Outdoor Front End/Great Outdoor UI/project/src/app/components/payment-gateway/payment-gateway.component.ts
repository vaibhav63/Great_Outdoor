import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {

  payAmount: number;
  quantity: number;
  constructor(private dialogRef: MatDialogRef<PaymentGatewayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private cartService: CartService) {
    this.payAmount = data.amount;
    this.quantity = data.quantity;

  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.cartService.clearCart();
    this.dialogRef.close();
  }

}
