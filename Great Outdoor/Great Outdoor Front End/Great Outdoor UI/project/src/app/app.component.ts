import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHidden: boolean = true;

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToDashboard() {

    this.router.navigate(['/adminPage']);
  }
}