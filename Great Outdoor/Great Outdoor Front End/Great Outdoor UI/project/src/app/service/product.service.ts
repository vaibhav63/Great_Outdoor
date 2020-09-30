import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ProductData } from '../components/dashboard/product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {

  subject=new Subject<any>();
  tempIndex:number=-1;
  products:Array<ProductData>=[];
  constructor(public fb:FormBuilder) {
     this.products = [
      {
        id: '1', name: 'Digital', price: 200, color: 'Blue', category: 'Watch',
        quantity: 26, manufacturer: 'Fastrack', specification: 'Water-Proof',
        image:'/assets/images/iphone.png'
      },
      {
        id: '2', name: 'T-Shirt', price: 4590, color: 'White', category: 'Cloth',
        quantity: 15, manufacturer: 'Levi', specification: 'Size-32',
        image:'/assets/images/hoody.png'
      },
      {
        id: '3', name: 'Maggy', price: 12, color: 'Yellow', category: 'Food',
        quantity: 100, manufacturer: 'Nestle', specification: 'Spicy',
        image:'/assets/images/maggy.png'
      }
    ];
   }

  formGroup:FormGroup=this.fb.group({
    id:['',Validators.required],
    name:['',Validators.required],
    image:['',Validators.required],
    price:['',Validators.required],
    color:['',Validators.required],
    category:['',Validators.required],
    quantity:['',Validators.required],
    manufacturer:['',Validators.required],
    specification:['',Validators.required],
 });

 initializeFormGroup(index:number){

  this.tempIndex=index;
  if(this.products[index]!=null){
    this.formGroup.setValue({
      id:this.products[index].id,
      name:this.products[index].name,
      image:this.products[index].image,
      price:this.products[index].price,
      color:this.products[index].color,
      category:this.products[index].category,
      quantity:this.products[index].quantity,
      manufacturer:this.products[index].manufacturer,
      specification:this.products[index].specification
     });
  }else{
    this.formGroup.reset();
  }
   
 }

 saveProduct(){

  
  if(this.tempIndex!=-1){
    this.products[this.tempIndex]=this.formGroup.value;
  }else{
    this.products.push(this.formGroup.value);
  }

  this.subject.next(this.products);
 }


 deleteProduct(index:number){
     this.products.splice(index,1);
     this.subject.next(this.products);
 }
}
