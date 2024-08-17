import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryDriverComponent } from './delivery-driver.component';

describe('DeliveryDriverComponent', () => {
  let component: DeliveryDriverComponent;
  let fixture: ComponentFixture<DeliveryDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [DeliveryDriverComponent]
    });
    fixture = TestBed.createComponent(DeliveryDriverComponent);
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

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'initDeliveryDriver').and.callThrough();
      component.ngOnInit();
      expect(component.initDeliveryDriver).toHaveBeenCalled();
    });
  });

  describe('ngAfterContentChecked', () => {
    it('makes expected calls', () => {
      spyOn(component, 'initDeliveryDriver').and.callThrough();
      component.ngAfterContentChecked();
      expect(component.initDeliveryDriver).toHaveBeenCalled();
    });
  });
});
