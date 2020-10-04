import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SalesReport } from '../model/sales-report.model';
import { SalesReportCommunicationService } from '../communication/sales-report-communication.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class SalesReportService {

  salesReport: Array<SalesReport> = [];
  subject = new Subject<any>();
  errorMessage:string;

  constructor(private salesReportCommunication: SalesReportCommunicationService,
    private notification:NotificationService) {

    salesReportCommunication.getAllSalesReport().subscribe(
      (salesReport) => {
        this.salesReport = salesReport;
        this.subject.next(salesReport)
      });
  }

  updateSalesReport(salesReport: SalesReport) {

    var index = this.salesReport.map(e => e.productId).indexOf(salesReport.productId);
    
    this.salesReportCommunication.updateSalesReport(salesReport).subscribe(
      (response) => {
        this.notification.showNotification('Sales Report Updated !!','✓','success');
        if (index !== -1) {
          this.salesReport[index].quantitySold += salesReport.quantitySold;
          this.salesReport[index].totalSale += salesReport.totalSale;
        } else {
          this.salesReport.push(salesReport);
        }
      },
      (error) => {
        this.notification.showNotification(error,'X','error');
      });
  }
}
