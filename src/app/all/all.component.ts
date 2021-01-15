import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../core/services/fetch-data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  allData: any;

  constructor(private fetchData: FetchDataService) { }

  ngOnInit() {
    this.fetchData.getAllData().subscribe(data => {
      if (data) {
        this.allData = data;
      }
    }, (error) => {
      console.log(error);
      });
  }

}
