import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GrowthReport } from '../model/growth-report.model';
import { GrowthReportCommunicationService } from '../communication/growth-report-communication.service';

@Injectable({
  providedIn: 'root'
})
export class GrowthReportService {

  growthReport: Array<GrowthReport> = [];
  subject = new Subject<any>();
  errorMessage: string;

  constructor(private growthReportCommunication: GrowthReportCommunicationService) {

    this.addGrowthReport();
    growthReportCommunication.getAllGrowthReports().subscribe(
      (growthReport) => {
        this.growthReport = growthReport;
        this.subject.next(growthReport);
      },
      (error) => {
        console.log(error);
      });
  }

  addGrowthReport() {

    this.growthReportCommunication.addGrowthReport().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }
}
