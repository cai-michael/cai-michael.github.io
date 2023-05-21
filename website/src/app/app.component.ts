import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Michael Cai';
  currentYear = new Date().getFullYear();
  
  constructor(private router: Router) {}

  isActiveNavButton(route: String) {
    if (this.router.url == route) {
      return ['active-nav-button'];
    } else {
      return [];
    }
  }
}
