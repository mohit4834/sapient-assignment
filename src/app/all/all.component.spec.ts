import { RouterTestingModule } from '@angular/router/testing';
import { DefaultComponent } from './../shared/component/default/default.component';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { FetchDataService } from '../core/services/fetch-data.service';
import { AllComponent } from './all.component';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

describe('AllComponent', () => {
  let component: AllComponent;
  let fixture: ComponentFixture<AllComponent>;
  let fetchDataService: FetchDataService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule, MatCardModule, RouterTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [AllComponent, DefaultComponent],
      providers: [
        {provide: ActivatedRoute, useValue: {
          queryParams: of({id: 123, name: 'SpaceX'})
        }},
        {provide: FetchDataService, useValue: {
          getFilteredData: () => of([{id: 123, name: 'SpaceX'}])
         }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComponent);
    component = fixture.componentInstance;
    component.allData = [{id: 123, name: 'SpaceX'}];
    fetchDataService = TestBed.get(FetchDataService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load Filtered data', () => {
    spyOn(fetchDataService, 'getFilteredData')
    .and
    .callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(fetchDataService.getFilteredData).toHaveBeenCalledWith(undefined, undefined, undefined);
    expect(component.allData).toEqual([{id: 123, name: 'SpaceX'}]);
  });
});
