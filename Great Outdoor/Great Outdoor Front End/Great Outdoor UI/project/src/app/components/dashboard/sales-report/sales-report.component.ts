import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements AfterViewInit {


  displayedColumns: string[] = ['salesReportId', 'productId', 'productName', 'quantitySold',
    'totalSale'];
  dataSource: MatTableDataSource<SalesReportData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    var salesReport = [
      { salesReportId: 1, productId: '1', productName: 'Digital', quantitySold: 10, totalSale: 12000 },
      { salesReportId: 2, productId: '2', productName: 'T-Shirt', quantitySold: 304, totalSale: 72000 },
      { salesReportId: 3, productId: '3', productName: 'Maggy', quantitySold: 540, totalSale: 23450 }
    ];

    this.dataSource = new MatTableDataSource(salesReport);
  }

  ngAfterViewInit() {
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

}

export interface SalesReportData {
  salesReportId: number;
  productId: string;
  productName: string;
  quantitySold: number;
  totalSale: number;
}