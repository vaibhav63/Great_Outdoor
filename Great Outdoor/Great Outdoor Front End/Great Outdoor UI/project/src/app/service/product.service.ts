import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ProductData } from '../components/dashboard/product-management/product-management.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  subject = new Subject<any>();
  tempIndex: number = -1;
  products: Array<ProductData> = [];
  constructor(public fb: FormBuilder) {
    this.products = [{
      id: '1', name: 'IPhone', price: 120, color: 'Black', category: 'Mobile',
      quantity: 20, manufacturer: 'Apple', specification: 'Dual Camera,Liquid Retina,6.1 inch Display',
      image: "/assets/images/iphone.png"
    },
    {
      id: '2', name: 'One Plus Nord', price: 300, color: 'Golden', category: 'Mobile',
      quantity: 2, manufacturer: 'One Plus', specification: 'Dual Camera,Liquid Retina,6.1 inch Display',
      image: "/assets/images/one_plus.png"
    },
    {
      id: '3', name: 'Oppo F17 Pro', price: 3440, color: 'Red', category: 'Mobile',
      quantity: 5, manufacturer: 'Guangdong Oppo', specification: 'Dual Camera,Liquid Retina,6.1 inch Display',
      image: "/assets/images/oppo.png"
    },
    {
      id: '4', name: 'Samsung S20', price: 2140, color: 'White', category: 'Mobile',
      quantity: 15, manufacturer: 'Samsung', specification: 'Dual Camera,Liquid Retina,6.1 inch Display',
      image: "/assets/images/samsung.png"
    }];
  }

  formGroup: FormGroup = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    image: ['', Validators.required],
    price: ['', Validators.required],
    color: ['', Validators.required],
    category: ['', Validators.required],
    quantity: ['', Validators.required],
    manufacturer: ['', Validators.required],
    specification: ['', Validators.required],
  });

  initializeFormGroup(index: number) {

    this.tempIndex = index;
    if (this.products[index] != null) {
      this.formGroup.setValue({
        id: this.products[index].id,
        name: this.products[index].name,
        image: this.products[index].image,
        price: this.products[index].price,
        color: this.products[index].color,
        category: this.products[index].category,
        quantity: this.products[index].quantity,
        manufacturer: this.products[index].manufacturer,
        specification: this.products[index].specification
      });
    } else {
      this.formGroup.reset();
    }

  }

  saveProduct() {


    if (this.tempIndex != -1) {
      this.products[this.tempIndex] = this.formGroup.value;
    } else {
      this.products.push(this.formGroup.value);
    }

    this.subject.next(this.products);
  }


  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.subject.next(this.products);
  }

}
