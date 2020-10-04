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

  constructor(private httpClient: HttpClient,private handleErrorService:HandleErrorService) { }


  getAllSalesReport(): Observable<SalesReport[]> {
    return this.httpClient.get<SalesReport[]>(this.baseUrl)
    .pipe(catchError(this.handleErrorService.handleError));
  }

  updateSalesReport(salesReport: SalesReport) {
    return this.httpClient.put(this.baseUrl, salesReport)
    .pipe(catchError(this.handleErrorService.handleError));
  }

  deleteAllSalesReport() {
    return this.httpClient.delete(`${this.baseUrl}/deleteAll`)
    .pipe(catchError(this.handleErrorService.handleError));
  }

  deleteSalesReportById(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`)
    .pipe(catchError(this.handleErrorService.handleError));
  }
}
