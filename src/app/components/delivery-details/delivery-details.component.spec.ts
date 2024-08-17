import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryDetailsComponent } from './delivery-details.component';

describe('DeliveryDetailsComponent', () => {
  let component: DeliveryDetailsComponent;
  let fixture: ComponentFixture<DeliveryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [DeliveryDetailsComponent]
    });
    fixture = TestBed.createComponent(DeliveryDetailsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'initDeliveryDetails').and.callThrough();
      component.ngOnInit();
      expect(component.initDeliveryDetails).toHaveBeenCalled();
    });
  });
});
