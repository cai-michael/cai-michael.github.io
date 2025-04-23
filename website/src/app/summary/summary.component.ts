import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  standalone: false,
})
export class SummaryComponent {
  @Input() header: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() dates: string = '';
  @Input() description: string = '';
  @Input() additionaltext: string = ''
}
