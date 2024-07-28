import { TestBed } from '@angular/core/testing';

import { CrudExemploService } from './crud-exemplo.service';

describe('CrudExemploService', () => {
  let service: CrudExemploService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudExemploService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
