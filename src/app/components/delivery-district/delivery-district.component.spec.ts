import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryDistrictComponent } from './delivery-district.component';

describe('DeliveryDistrictComponent', () => {
  let component: DeliveryDistrictComponent;
  let fixture: ComponentFixture<DeliveryDistrictComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [DeliveryDistrictComponent]
    });
    fixture = TestBed.createComponent(DeliveryDistrictComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`content has default value`, () => {
    expect(component.content).toEqual([]);
  });

  it(`rows has default value`, () => {
    expect(component.rows).toEqual([]);
  });

  it(`deliveryDistricts has default value`, () => {
    expect(component.deliveryDistricts).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'initDeliveryDistrict').and.callThrough();
      component.ngOnInit();
      expect(component.initDeliveryDistrict).toHaveBeenCalled();
    });
  });

  describe('ngAfterContentChecked', () => {
    it('makes expected calls', () => {
      spyOn(component, 'initDeliveryDistrict').and.callThrough();
      component.ngAfterContentChecked();
      expect(component.initDeliveryDistrict).toHaveBeenCalled();
    });
  });
});
