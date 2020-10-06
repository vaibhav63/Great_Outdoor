import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GrowthReport } from '../model/growth-report.model';
import { HandleErrorService } from '../handle_error/handle-error.service';

@Injectable({
  providedIn: 'root'
})

export class GrowthReportCommunicationService {

  private baseUrl = 'http://localhost:8000/api/growth_report';

  constructor(private httpClient: HttpClient, private handleErrorService: HandleErrorService) { }

  // getting all the growth report 
  getAllGrowthReports(): Observable<GrowthReport[]> {
    return this.httpClient.get<GrowthReport[]>(this.baseUrl)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  //adding growth report in database 
  addGrowthReport() {
    return this.httpClient.post(this.baseUrl, null)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // deleting all the growth report details
  deleteAllGrowthReport() {
    return this.httpClient.delete(`${this.baseUrl}/deleteAll`)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  //deleting growth report entities by id
  deleteGrowthReportById(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`)
      .pipe(catchError(this.handleErrorService.handleError));
  }
}

