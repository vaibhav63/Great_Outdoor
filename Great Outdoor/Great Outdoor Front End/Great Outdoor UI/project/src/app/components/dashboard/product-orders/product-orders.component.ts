import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/service/order.service';
import { ProductData } from '../product/product.component';

@Component({
  selector: 'app-product-orders',
  templateUrl: './product-orders.component.html',
  styleUrls: ['./product-orders.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ProductOrdersComponent implements OnInit {

  columnsToDisplay: string[] = ['orderId', 'userId', 'products', 'totalPrice',
    'totalQuantity', 'addressId', 'dispatchDate', 'arrivalDate', 'actions'];

  date1: string;
  date2: string;

  expandedElement: ProductData | null;
  dataSource: MatTableDataSource<OrderDetails>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, public orderService: OrderService) {


    this.dataSource = new MatTableDataSource(orderService.orders);
  }

  ngOnInit() {
    this.orderService.subject.subscribe(
      (orders) => {
        this.dataSource = new MatTableDataSource(orders);
      }
    )
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

  updateSchedule(orderId) {
    let index = this.orderService.orders.findIndex(x => x.orderId === orderId);
    if (this.date1 == null) {
      this.date1 = this.orderService.orders[index].dispatchDate;
    }
    if (this.date2 == null) {
      this.date2 = this.orderService.orders[index].arrivalDate;
    }

    this.orderService.updateSchedule(index, this.date1, this.date2);

  }

  deleteOrder(orderId) {

    let index = this.orderService.orders.findIndex(x => x.orderId === orderId);
    this.orderService.deleteOrder(index);
  }

}


export interface OrderDetails {
  id: number;
  orderId: string;
  userId: string;
  products: string;
  totalPrice: number;
  totalQuantity: number,
  addressId: string,
  dispatchDate: string,
  arrivalDate: string
}




