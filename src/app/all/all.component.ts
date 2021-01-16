import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../core/services/fetch-data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  allData: any;
  launchYear: any;
  launchSuccess: any;
  landSuccess: any;

  constructor(private fetchData: FetchDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(elem => {
      this.launchYear = elem.launch_year;
      this.launchSuccess = elem.launch_success;
      this.landSuccess = elem.land_success;
      this.fetchData.getFilteredData(elem.launch_year, elem.launch_success, elem.land_success).subscribe(data => {
        if (data) {
          this.allData = data;
        }
      }, (error) => {
        console.log(error);
      });
    });
  }

}
