import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SalesReport } from 'src/app/model/sales-report.model';
import { SalesReportService } from 'src/app/service/sales-report.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['salesReportId', 'productId', 'productName', 'quantitySold',
    'totalSale'];

  dataSource: MatTableDataSource<SalesReport>;
  totalRevenue: number = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public salesReportService: SalesReportService) {
    this.dataSource = new MatTableDataSource(salesReportService.salesReport);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.salesReportService.subject.subscribe(
      (salesReport) => {
        this.dataSource = new MatTableDataSource(salesReport);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getTotalRevenue() {
    if (this.salesReportService.getTotalRevenue()) {
      return this.totalRevenue = this.salesReportService.getTotalRevenue();
    }
    return this.totalRevenue;
  }
}
