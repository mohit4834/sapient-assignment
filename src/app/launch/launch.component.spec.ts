import { DefaultComponent } from './../shared/component/default/default.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { FetchDataService } from '../core/services/fetch-data.service';

import { LaunchComponent } from './launch.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('LaunchComponent', () => {
  let component: LaunchComponent;
  let fixture: ComponentFixture<LaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule, MatCardModule],
      declarations: [LaunchComponent, DefaultComponent],
      providers: [FetchDataService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
