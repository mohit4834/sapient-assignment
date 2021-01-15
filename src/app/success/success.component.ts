import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../core/services/fetch-data.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  successData: any;

  constructor(private fetchData: FetchDataService) { }

  ngOnInit() {
    this.fetchData.getSuccessData().subscribe(data => {
      if (data) {
        this.successData = data;
      }
    }, (error) => {
      console.log(error);
      });
  }

}
