import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/service/product.service';
import { EditProductComponent } from '../edit-product/edit-product.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'color', 'category',
    'quantity', 'manufacturer', 'specification', 'actions'];
  dataSource: MatTableDataSource<ProductData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, public productService: ProductService) {
    this.dataSource = new MatTableDataSource(productService.products);
  }

  ngOnInit() {

    this.productService.subject.subscribe(
      (products) => {
        this.dataSource = new MatTableDataSource(products);
      });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onCreate(row: number) {
    this.productService.initializeFormGroup(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EditProductComponent, dialogConfig);
  }


  deleteProduct(row: number) {
    this.productService.deleteProduct(row);
  }
}

export interface ProductData {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  category: string,
  quantity: number,
  manufacturer: string,
  specification: string
}
