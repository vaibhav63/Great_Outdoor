import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleErrorService } from '../handle_error/handle-error.service';
import { SalesReport } from '../model/sales-report.model';

@Injectable({
  providedIn: 'root'
})
export class SalesReportCommunicationService {

  private baseUrl = 'http://localhost:8000/api/sales_report';

  constructor(private httpClient: HttpClient, private handleErrorService: HandleErrorService) { }

  // getting all the sales report about every product
  getAllSalesReport(): Observable<SalesReport[]> {
    return this.httpClient.get<SalesReport[]>(this.baseUrl)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // updating sales report whenever order is placed
  updateSalesReport(salesReport: SalesReport) {
    return this.httpClient.put(this.baseUrl, salesReport)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // deleting all the sales report
  deleteAllSalesReport() {
    return this.httpClient.delete(`${this.baseUrl}/deleteAll`)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // deleting sales report by id
  deleteSalesReportById(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`)
      .pipe(catchError(this.handleErrorService.handleError));
  }
}
