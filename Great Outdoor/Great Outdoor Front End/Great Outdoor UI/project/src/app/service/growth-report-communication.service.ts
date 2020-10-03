import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrowthReport } from '../model/growth-report.model';

@Injectable({
  providedIn: 'root'
})
export class GrowthReportCommunicationService {

  private baseUrl = 'http://localhost:8000/api/growth_report';

  constructor(private httpClient: HttpClient) { }

  getAllGrowthReports(): Observable<GrowthReport[]> {
    return this.httpClient.get<GrowthReport[]>(this.baseUrl);
  }

  addGrowthReport() {
    return this.httpClient.post(this.baseUrl, null);
  }

  deleteAllGrowthReport() {
    return this.httpClient.delete(`${this.baseUrl}/deleteAll`);
  }

  deleteGrowthReportById(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}

