import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/core/services/fetch-data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  @Input()
  filteredData: any;

  @Input()
  launchYear: any;

  @Input()
  launchSuccess: any;

  @Input()
  landSuccess: any;

  launchYears = ['2006', '2007', '2008', '2009', '2010', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  displayFlag: boolean;
  selectedYear: string;
  selectedLaunch: boolean;
  selectedLand: boolean;
  queryParams: any;

  constructor(private fetchData: FetchDataService, private router: Router) { }

  ngOnInit(): void {
    if (this.launchYear === undefined && this.landSuccess === undefined && this.launchSuccess === undefined) {
      this.queryParams = {};
      this.launchYears = [];
      this.filteredData.forEach((element, index) => {
        if (this.launchYears.indexOf(element.launch_year) < 0) {
          this.launchYears.push(element.launch_year);
        }
      });
      console.log('Launch Years', this.launchYears);
      this.displayFlag = true;
    } else {
      this.queryParams = {};
      this.selectedYear = this.launchYear;
      if (this.selectedYear) {
        this.queryParams.launch_year = this.selectedYear;
      }
      if (this.launchSuccess === 'true') {
        this.selectedLaunch = true;
      } else if (this.launchSuccess === 'false') {
        this.selectedLaunch = false;
      }
      this.queryParams.launch_success = this.selectedLaunch;
      if (this.landSuccess === 'true') {
        this.selectedLand = true;
      } else if (this.landSuccess === 'false') {
        this.selectedLand = false;
      }
      this.queryParams.land_success = this.selectedLand;
      this.displayFlag = true;
    }
  }

  filterData(field, val) {
    if (field === 'launch_year') {
      if (this.selectedYear === val) {
        this.selectedYear = null;
        delete this.queryParams.launch_year;
      } else {
        this.selectedYear = val;
        this.queryParams.launch_year = this.selectedYear;
      }
    }
    if (field === 'launch_success') {
      if (this.selectedLaunch === val) {
        this.selectedLaunch = null;
        delete this.queryParams.launch_success;
      } else {
        this.selectedLaunch = val;
        this.queryParams.launch_success = this.selectedLaunch;
      }
    }
    if (field === 'land_success') {
      if (this.selectedLand === val) {
        this.selectedLand = null;
        delete this.queryParams.land_success;
      } else {
        this.selectedLand = val;
        this.queryParams.land_success = this.selectedLand;
      }
    }
    this.router.navigate(['all'], { queryParams: this.queryParams });
  }

}
