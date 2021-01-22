import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor(private http: HttpClient) { }

  getUnfilteredData() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  getFilteredData(launchYear?, launchSuccess?, landSuccess?) {
    const param = {
      launch_year: undefined,
      launch_success: undefined,
      land_success: undefined
    };
    if (launchYear) {
      param.launch_year = launchYear;
    } else {
      delete param.launch_year;
    }
    if (launchSuccess !== undefined) {
      param.launch_success = launchSuccess;
    } else {
      delete param.launch_success;
    }
    if (landSuccess !== undefined) {
      param.land_success = landSuccess;
    }  else {
      delete param.land_success;
    }
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100', {params: param});
  }
}
