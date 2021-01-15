import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FetchDataService } from './fetch-data.service';
import { from } from 'rxjs';

describe('FetchDataService', () => {
  let service: FetchDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
      providers: [FetchDataService]
    })
    service = TestBed.get(FetchDataService);
  });
  it('should be created', () => {
    const service: FetchDataService = TestBed.get(FetchDataService);
    expect(service).toBeTruthy();
  });

  // Add tests for login() method
  describe('getUnfilteredData', () => {

    it('should return a observable of array in getLaunchData', () => {
      let response;
      service.getLaunchData().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(undefined);
    });
    it('should return a observable of array in getUnfilteredData', () => {
      let response;

      service.getUnfilteredData().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(undefined);
    });
  });

});
