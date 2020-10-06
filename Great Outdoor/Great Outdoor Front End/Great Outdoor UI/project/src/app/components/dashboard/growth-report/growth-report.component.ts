import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GrowthReport } from 'src/app/model/growth-report.model';
import { GrowthReportService } from 'src/app/service/growth-report.service';

@Component({
  selector: 'app-growth-report',
  templateUrl: './growth-report.component.html',
  styleUrls: ['./growth-report.component.css']
})

export class GrowthReportComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['growthReportId', 'currentdate', 'revenue',
    'amountChange', 'percentageGrowth', 'colorCode'];

  dataSource: MatTableDataSource<GrowthReport>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private growthReportService: GrowthReportService) {
    this.dataSource = new MatTableDataSource(growthReportService.growthReport);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {

    this.growthReportService.subject.subscribe(
      (growthReport) => {
        this.dataSource = new MatTableDataSource(growthReport);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
