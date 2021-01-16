import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  launchYearArray = [];
  constructor(private http: HttpClient) { }

  getUnfilteredData() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  getFilteredData(launch_year?, launch_success?, land_success?) {
    let param = {};
    if (launch_year) {
      param['launch_year'] = launch_year;
    }
    if (launch_success !== undefined) {
      param['launch_success'] = launch_success;
    }
    if (land_success !== undefined) {
      param['land_success'] = land_success;
    }
    // const param = {launch_year: launch_year, launch_success: launch_success, land_success: land_success };
    return this.http.get('https://api.spaceXdata.com/v3/launches', {params: param});
  }

  setLaunchYear(arr) {
    this.launchYearArray = arr;
  }

  getLaunchYearArray() {
    return this.launchYearArray;
  }

  getSuccessData() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true');
  }

  getLaunchData() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true');
  }

  getAllData() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014');
  }

}
