import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../core/services/fetch-data.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {
  launchData: any;

  constructor(private fetchData: FetchDataService) { }

  ngOnInit() {
    this.fetchData.getLaunchData().subscribe(data => {
        if (data) {
          this.launchData = data;
        }
        }, (error) => {
          console.log(error);
          });
  }

}
