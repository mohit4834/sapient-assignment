import { Component, Input, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/core/services/fetch-data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  @Input()
  unfilterdData: any;

  filterData: any;
  launchYears = [];
  displayFlag: boolean;
  selectedYear: string;

  constructor(private fetchData: FetchDataService) { }

  ngOnInit(): void {
    if (!this.unfilterdData) {
      this.fetchData.getUnfilteredData().subscribe(data => {
        if (data) {
          this.unfilterdData = data;
          this.filterData = JSON.parse(JSON.stringify(this.unfilterdData));
          console.log(this.unfilterdData);
          this.getLaunchYearsList();
        }
      }, (error) => {
        console.log(error);
        });
    } else {
      this.getLaunchYearsList();
      this.filterData = JSON.parse(JSON.stringify(this.unfilterdData));
    }
  }

  getLaunchYearsList() {
    this.unfilterdData.forEach((element, index) => {
      if (this.launchYears.indexOf(element.launch_year) < 0) {
        this.launchYears.push(element.launch_year);
      }
    });
    console.log('Launch Years', this.launchYears);
    this.displayFlag = true;
  }

  filterDataByYear(year) {
    this.selectedYear = year;
    const filteredData = this.unfilterdData.filter(data => data.launch_year === year);
    this.filterData = filteredData;
    console.log(filteredData);
  }

  filterDataByFlag(field, val) {
    const filteredData = this.unfilterdData.filter(data => data[field] === val);
    this.filterData = filteredData;
    console.log(filteredData);
  }

}
