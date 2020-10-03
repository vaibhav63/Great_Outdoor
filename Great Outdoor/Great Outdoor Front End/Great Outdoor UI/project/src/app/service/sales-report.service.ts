import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SalesReport } from '../model/sales-report.model';
import { SalesReportCommunicationService } from './sales-report-communication.service';

@Injectable({
  providedIn: 'root'
})
export class SalesReportService {

  salesReport: Array<SalesReport> = [];
  subject = new Subject<any>();

  constructor(private salesReportCommunication: SalesReportCommunicationService) {

    console.log("hello");
    salesReportCommunication.getAllSalesReport().subscribe(
      (salesReport) => {
        this.salesReport = salesReport;
        this.subject.next(salesReport)
      },
      (error) => {
        console.log(error);
      });
  }

  updateSalesReport(salesReport: SalesReport) {

    var index = this.salesReport.map(e => e.productId).indexOf(salesReport.productId);
    if (index !== -1) {
      this.salesReport[index].quantitySold += salesReport.quantitySold;
      this.salesReport[index].totalSale += salesReport.totalSale;
    } else {
      this.salesReport.push(salesReport);
    }
    this.salesReportCommunication.updateSalesReport(salesReport).subscribe(
      (response) => {
        console.log(response + "from sales-report update");
      },
      (error) => {
        console.log(error);
      });
  }
}
