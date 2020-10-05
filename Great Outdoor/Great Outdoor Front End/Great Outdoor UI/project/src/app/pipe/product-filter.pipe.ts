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
    var tempList: Product[] = products.filter(product =>
      product.productCategory.toLowerCase().indexOf(category.toLowerCase()) !== -1);

    if (tempList.length) {
      return tempList;
    } else {
      tempList = [new Product("1", null, null, null, null, null, null, null, "https://www.aquafresh-ro.in/images/pnf.jpg")];
      return tempList;
    }
  }

}
