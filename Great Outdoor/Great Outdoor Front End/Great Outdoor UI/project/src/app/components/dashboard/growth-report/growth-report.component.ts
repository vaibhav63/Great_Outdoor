import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-growth-report',
  templateUrl: './growth-report.component.html',
  styleUrls: ['./growth-report.component.css']
})
export class GrowthReportComponent implements AfterViewInit {


  displayedColumns: string[] = ['growthReportId', 'currentDate', 'revenue',
    'amountChange', 'percentageGrowth', 'colorCode'];
  dataSource: MatTableDataSource<GrowthReportData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    var growthReport = [
      {
        growthReportId: 1, currentDate: '2020-09-27', revenue: 22345,
        amountChange: 230, percentageGrowth: 7, colorCode: 'Blue'
      },
      {
        growthReportId: 2, currentDate: '2020-11-02', revenue: 92335,
        amountChange: 123, percentageGrowth: 1, colorCode: 'Red'
      },
      {
        growthReportId: 3, currentDate: '2020-12-12', revenue: 892345,
        amountChange: 2524, percentageGrowth: 12, colorCode: 'Green'
      },
    ];

    this.dataSource = new MatTableDataSource(growthReport);
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


export interface GrowthReportData {
  growthReportId: number;
  currentDate: string;
  revenue: number;
  amountChange: number;
  percentageGrowth: number;
  colorCode: string;
}