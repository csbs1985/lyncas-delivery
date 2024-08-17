import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: ApiService = TestBed.inject(ApiService);
    expect(service).toBeTruthy();
  });
});
