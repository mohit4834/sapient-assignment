import { RouterTestingModule } from '@angular/router/testing';
import { DefaultComponent } from './../shared/component/default/default.component';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { FetchDataService } from '../core/services/fetch-data.service';
import { AllComponent } from './all.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AllComponent', () => {
  let component: AllComponent;
  let fixture: ComponentFixture<AllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule, MatCardModule, RouterTestingModule],
      declarations: [AllComponent, DefaultComponent],
      providers: [FetchDataService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComponent);
    component = fixture.componentInstance;
    component.allData = [{}];
    fixture.detectChanges();
  });

  it('should create', async(inject([FetchDataService], (fetchDataService: FetchDataService) => {
    expect(component).toBeTruthy();
  })));
});
