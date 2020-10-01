import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  header: string;

  constructor(private dialogRef: MatDialogRef<EditProductComponent>,
    public productService: ProductService) { }

  ngOnInit() {
    this.header = this.productService.tempIndex == -1 ? "ADD PRODUCT" : "UPDATE PRODUCT";
  }

  onSubmit() {
    this.productService.saveProduct();
    this.onClose();

  }

  onClose() {
    this.dialogRef.close();
  }

  onClear() {
    this.productService.formGroup.reset();
  }

}



