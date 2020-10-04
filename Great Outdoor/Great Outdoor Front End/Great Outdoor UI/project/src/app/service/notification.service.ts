import { Injectable } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) {}

  showNotification(displayMessage: string, buttonText: string, messageType: 'error' | 'success') {
    this.snackBar.open(displayMessage, buttonText, {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: [messageType, 'notification']
    });
  }
}
