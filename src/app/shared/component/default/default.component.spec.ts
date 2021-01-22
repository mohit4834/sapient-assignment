import { FetchDataService } from 'src/app/core/services/fetch-data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { DefaultComponent } from './default.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule, MatCardModule, RouterTestingModule],
      declarations: [ DefaultComponent],
      providers: [FetchDataService, HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    component.filteredData = [{}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call filterData', async(() => {
    spyOn(component, 'filterData');
    const buttons = fixture.debugElement.query(By.css('#button2006')).nativeElement;
    buttons.click();
    fixture.whenStable().then(() => {
      expect(component.filterData).toHaveBeenCalled();
    });
  }));

  it('should call filterData with 2007', async(() => {
    spyOn(component, 'filterData');
    const buttons = fixture.debugElement.query(By.css('#button2007')).nativeElement;
    buttons.click('launch_year', '2007');
    fixture.whenStable().then(() => {
      expect(component.filterData).toHaveBeenCalledWith('launch_year', '2007');
    });
  }));

});
