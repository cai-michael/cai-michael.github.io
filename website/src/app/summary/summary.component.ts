import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  @Input() header: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() dates: string = '';
}
