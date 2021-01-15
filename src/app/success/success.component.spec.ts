import { DefaultComponent } from './../shared/component/default/default.component';
import { FetchDataService } from 'src/app/core/services/fetch-data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessComponent } from './success.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule, MatCardModule],
      declarations: [ SuccessComponent, DefaultComponent],
      providers: [FetchDataService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    component.successData = [{}];
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
