import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryFailComponent } from './delivery-fail.component';

describe('DeliveryFailComponent', () => {
  let component: DeliveryFailComponent;
  let fixture: ComponentFixture<DeliveryFailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [DeliveryFailComponent]
    });
    fixture = TestBed.createComponent(DeliveryFailComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`content has default value`, () => {
    expect(component.content).toEqual([]);
  });

  it(`deliveryFails has default value`, () => {
    expect(component.deliveryFails).toEqual([]);
  });

  it(`totalWidth has default value`, () => {
    expect(component.totalWidth).toEqual(0);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'initDeliveryFail').and.callThrough();
      component.ngOnInit();
      expect(component.initDeliveryFail).toHaveBeenCalled();
    });
  });

  describe('ngAfterContentChecked', () => {
    it('makes expected calls', () => {
      spyOn(component, 'initDeliveryFail').and.callThrough();
      component.ngAfterContentChecked();
      expect(component.initDeliveryFail).toHaveBeenCalled();
    });
  });

  describe('ngAfterViewInit', () => {
    it('makes expected calls', async () => {
      const spy = spyOn(component, 'fillBarDeliveryFails').and.callThrough();
      await fixture.whenStable();
      component.ngAfterViewInit();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
