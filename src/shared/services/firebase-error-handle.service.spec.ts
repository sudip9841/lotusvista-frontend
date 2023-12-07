import { TestBed } from '@angular/core/testing';

import { FirebaseErrorHandleService } from './firebase-error-handle.service';

describe('FirebaseErrorHandleService', () => {
  let service: FirebaseErrorHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseErrorHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
