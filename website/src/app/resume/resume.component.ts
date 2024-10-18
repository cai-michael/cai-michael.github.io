import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})

export class ResumeComponent {
  currentDateString(startDate: String) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var currentDate = new Date();
    var currentMonth = month.at(currentDate.getMonth());
    var currentYear = currentDate.getFullYear();
    var dates = `${startDate} - ${currentMonth} ${currentYear} (Present)`
    return dates;
  }

  downloadResume() {
    window.open("/assets/michael-cai-resume.pdf", '_blank');
  }
}
