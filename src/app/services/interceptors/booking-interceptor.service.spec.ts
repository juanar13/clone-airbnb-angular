import { TestBed } from '@angular/core/testing';

import { BookingInterceptorService } from './booking-interceptor.service';

describe('BookingInterceptorService', () => {
  let service: BookingInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
