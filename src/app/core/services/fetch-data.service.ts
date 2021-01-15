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
