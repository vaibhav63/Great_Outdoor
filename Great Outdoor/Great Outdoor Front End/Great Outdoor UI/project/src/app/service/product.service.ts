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
    ,private notification:NotificationService) {

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
      this.productCommunication.updateProduct(this.formGroup.value).subscribe(
        (response) => {
          this.notification.showNotification('Successfully Updated !!','✓','success');
          this.products[this.tempIndex] = this.formGroup.value;
        },
        (error) => {
          this.notification.showNotification(error,'X','error');
        });
    } else {
      
      this.productCommunication.addProduct(this.formGroup.value).subscribe(
        (response) => {
          this.notification.showNotification('Successfully Added !!','✓','success');
          this.products.push(this.formGroup.value);
        },
        (error) => {
          this.notification.showNotification(error,'X','error');
        });
    }
    this.subject.next(this.products);
  }

  updateProductQuantity(quantity: number, productId: string) {
    this.productCommunication.updateProductQuantity(quantity, productId).subscribe(
      (response) => {
        this.notification.showNotification('Product Quantity Updated Successfully !!','✓','success');
        var index = this.products.map(p => p.productId).indexOf(productId);
        this.products[index].productQuantity = quantity;
      },
      (error) => {
        this.notification.showNotification(error,'X','error');
      });
  }
  // splice will return deleted elements I'm taking first element of that array

  deleteProduct(index: number) {
    
    this.productCommunication.deleteProduct(this.products[index].productId).subscribe(
      (response) => {
        this.notification.showNotification(
          `Product with Id:${this.products[index].productId} Deleted Successfully !!`,'✓','success');
           this.products.splice(index, 1);
           this.subject.next(this.products);
      },
      (error) => {
        this.notification.showNotification(error,'X','error');
      });
    
  }



  searchProduct(keyword:string){




    if(keyword!=null){
      console.log(keyword);
      this.productCommunication.productSearch(keyword).subscribe(
        (products)=>{
          this.products = products;
          this.subject.next(products);
        });
    }else{
      console.log(keyword);
      this.productCommunication.getProducts().subscribe(
        (products)=>{
          this.products = products;
          this.subject.next(products);
        });
    }
   
  }


  //Not used Yet
  // getProductById(productId) {

  //   this.productCommunication.getProductById(productId).subscribe(
  //     (product) => {
  //       console.log(product);
  //     });
  // }


  // getProductsByCategory(category: string) {

  //   console.log(this.products);
  //   console.log(this.products.filter(product =>
  //   product.productCategory.toLowerCase().indexOf(category.toLowerCase()) !== -1));
  // }
}
