import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductCommunicationService } from '../communication/product-communication.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  subject = new Subject<any>();
  tempIndex: number = -1;
  products: Array<Product> = [];

  constructor(public fb: FormBuilder, private productCommunication: ProductCommunicationService
    , private notification: NotificationService) {

    productCommunication.getProducts().subscribe(
      (products) => {
        this.products = products;
        this.subject.next(products);
      });
  }

  formGroup: FormGroup = this.fb.group({
    productId: ['', Validators.required],
    productName: ['', Validators.required],
    productImage: ['', Validators.required],
    productPrice: ['', Validators.required],
    productColor: ['', Validators.required],
    productCategory: ['', Validators.required],
    productQuantity: ['', Validators.required],
    productManufacturer: ['', Validators.required],
    productSpecification: ['', Validators.required],
  });

  initializeFormGroup(item: any) {

    if (item != null) {
      this.tempIndex = this.products.indexOf(item);
      this.formGroup.setValue({
        productId: item.productId,
        productName: item.productName,
        productImage: item.productImage,
        productPrice: item.productPrice,
        productColor: item.productColor,
        productCategory: item.productCategory,
        productQuantity: item.productQuantity,
        productManufacturer: item.productManufacturer,
        productSpecification: item.productSpecification
      });
    } else {
      this.formGroup.reset();
    }
  }

  saveProduct() {

    if (this.tempIndex != -1) {
      console.log(this.tempIndex);
      this.productCommunication.updateProduct(this.formGroup.value).subscribe(
        (response) => {
          this.notification.showNotification('Successfully Updated !!', '✓', 'success');
          this.products[this.tempIndex] = this.formGroup.value;
          this.subject.next(this.products);

        },
        (error) => {
          this.notification.showNotification(error, 'X', 'error');
        });
    } else {

      this.productCommunication.addProduct(this.formGroup.value).subscribe(
        (response) => {
          this.notification.showNotification('Successfully Added !!', '✓', 'success');
          this.products.push(this.formGroup.value);
          this.subject.next(this.products);
        },
        (error) => {
          this.notification.showNotification(error, 'X', 'error');
        });
    }

  }

  updateProductQuantity(quantity: number, productId: string) {
    this.productCommunication.updateProductQuantity(quantity, productId).subscribe(
      (response) => {
        this.notification.showNotification('Product Quantity Updated Successfully !!', '✓', 'success');
        var index = this.products.map(p => p.productId).indexOf(productId);
        this.products[index].productQuantity = quantity;
      },
      (error) => {
        this.notification.showNotification(error, 'X', 'error');
      });
  }

  deleteProduct(item: any) {
    const index = this.products.indexOf(item);
    this.productCommunication.deleteProduct(item.productId).subscribe(
      (response) => {
        this.notification.showNotification(
          `Product with Id:${item.productId} Deleted Successfully !!`, '✓', 'success');
        this.products.splice(index, 1);
        this.subject.next(this.products);
      },
      (error) => {
        this.notification.showNotification(error, 'X', 'error');
      });

  }



  searchProduct(keyword: string) {

    if (keyword != "") {
      console.log(keyword);
      this.productCommunication.productSearch(keyword).subscribe(
        (products) => {
          this.products = products;
          this.subject.next(products);
        });
    } else {
      console.log(keyword);
      this.productCommunication.getProducts().subscribe(
        (products) => {
          this.products = products;
          this.subject.next(products);
        });
    }

  }
}
