import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusDelivery } from '../../enums/status_delivery.enum';
import { DeliveryCardComponent } from './delivery-card.component';

describe('DeliveryCardComponent', () => {
  let component: DeliveryCardComponent;
  let fixture: ComponentFixture<DeliveryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [DeliveryCardComponent]
    });
    fixture = TestBed.createComponent(DeliveryCardComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`content has default value`, () => {
    expect(component.content).toEqual([]);
  });

  it(`deliveryCard has default value`, () => {
    expect(component.deliveryCard).toEqual([]);
  });

  it(`StatusDelivery has default value`, () => {
    expect(component.StatusDelivery).toEqual(StatusDelivery);
  });
});
