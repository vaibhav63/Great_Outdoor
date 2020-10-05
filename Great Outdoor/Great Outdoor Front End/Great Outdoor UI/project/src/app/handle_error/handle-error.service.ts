import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {


  public handleError(errorResponse: HttpErrorResponse) {

    console.error('Generated Error', errorResponse);
    return throwError(errorResponse.error.message);
  }
}
