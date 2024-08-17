import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryComponent } from './delivery.component';

describe('DeliveryComponent', () => {
  let component: DeliveryComponent;
  let fixture: ComponentFixture<DeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [DeliveryComponent]
    });
    fixture = TestBed.createComponent(DeliveryComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
