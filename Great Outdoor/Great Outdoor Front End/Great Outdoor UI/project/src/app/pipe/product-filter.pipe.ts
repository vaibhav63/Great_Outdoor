import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'productFilter',
  pure: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], category: string): Product[] {
    if (!products || !category) {
      return products;
    }
    return products.filter(product =>
      product.productCategory.toLowerCase().indexOf(category.toLowerCase()) !== -1);
  }
  
}
