import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})

export class ResumeComponent {
  currentDateString(startDate: String) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var currentMonth = month[Date.prototype.getMonth()];
    var currentYear = Date.prototype.getMonth();
    var dates = `${startDate} - ${currentMonth} ${currentYear} (Present)`
    return dates;
  }
}
