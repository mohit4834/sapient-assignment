import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor(private http: HttpClient) { }

  getUnfilteredData() {
    return this.http.get(environment.API_URL);
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
    return this.http.get(environment.API_URL, {params: param});
  }
}
