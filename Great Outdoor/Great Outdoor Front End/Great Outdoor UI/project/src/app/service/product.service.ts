import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductCommunicationService } from './product-communication.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  subject = new Subject<any>();
  tempIndex: number = -1;
  products: Array<Product> = [];

  constructor(public fb: FormBuilder, private productCommunication: ProductCommunicationService) {

    productCommunication.getProducts().subscribe(
      (products) => {
        this.products = products;
        this.subject.next(products);
      },
      (error) => {
        console.log(error);
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

  initializeFormGroup(index: number) {

    this.tempIndex = index;
    if (this.products[index] != null) {
      this.formGroup.setValue({
        productId: this.products[index].productId,
        productName: this.products[index].productName,
        productImage: this.products[index].productImage,
        productPrice: this.products[index].productPrice,
        productColor: this.products[index].productColor,
        productCategory: this.products[index].productCategory,
        productQuantity: this.products[index].productQuantity,
        productManufacturer: this.products[index].productManufacturer,
        productSpecification: this.products[index].productSpecification
      });
    } else {
      this.formGroup.reset();
    }
  }

  saveProduct() {

    if (this.tempIndex != -1) {
      console.log(this.formGroup.value);
      this.products[this.tempIndex] = this.formGroup.value;
      console.log(this.products[this.tempIndex]);
      this.productCommunication.updateProduct(this.formGroup.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        });
    } else {
      this.products.push(this.formGroup.value);
      this.productCommunication.addProduct(this.formGroup.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        });
    }
    this.subject.next(this.products);
  }

  updateProductQuantity(quantity: number, productId: string) {
    this.productCommunication.updateProductQuantity(quantity, productId).subscribe(
      (product) => {
        console.log(product);
      },
      (error) => {
        console.log(error);
      });
  }
  // splice will return deleted elements I'm taking first element of that array

  deleteProduct(index: number) {
    const product = this.products.splice(index, 1);
    this.productCommunication.deleteProduct(product[0].productId).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
    this.subject.next(this.products);
  }



  //Not used Yet
  getProductById(productId) {

    this.productCommunication.getProductById(productId).subscribe(
      (product) => {
        console.log(product);
      });
  }


  getProductsByCategory(category: string) {

    console.log(this.products);
    console.log(this.products.filter(product =>
      product.productCategory.toLowerCase().indexOf(category.toLowerCase()) !== -1));
  }
}
