import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryComponent } from '../summary/summary.component';
import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeComponent, SummaryComponent],
    });
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
