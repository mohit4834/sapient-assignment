import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FetchDataService } from './fetch-data.service';

describe('FetchDataService', () => {
  let service: FetchDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
      providers: [FetchDataService]
    });
    service = TestBed.get(FetchDataService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUnfilteredData', () => {

    it('should return a observable of array in getLaunchData', () => {
      let response;
      service.getFilteredData().subscribe(res => {
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
