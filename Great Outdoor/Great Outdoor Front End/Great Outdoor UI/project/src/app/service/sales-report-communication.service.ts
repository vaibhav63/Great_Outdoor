import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesReport } from '../model/sales-report.model';

@Injectable({
  providedIn: 'root'
})
export class SalesReportCommunicationService {

  private baseUrl = 'http://localhost:8000/api/sales_report';

  constructor(private httpClient: HttpClient) { }


  getAllSalesReport(): Observable<SalesReport[]> {
    return this.httpClient.get<SalesReport[]>(this.baseUrl);
  }

  updateSalesReport(salesReport: SalesReport) {
    return this.httpClient.put(this.baseUrl, salesReport);
  }

  deleteAllSalesReport() {
    return this.httpClient.delete(`${this.baseUrl}/deleteAll`);
  }

  deleteSalesReportById(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
