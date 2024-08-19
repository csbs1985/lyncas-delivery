import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DeleiveryListComponent } from './deleivery-list.component';

describe('DeleiveryListComponent', () => {
  let component: DeleiveryListComponent;
  let fixture: ComponentFixture<DeleiveryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeleiveryListComponent]
    });
    fixture = TestBed.createComponent(DeleiveryListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('initPagination', () => {
    it('makes expected calls', () => {
      spyOn(component, 'filterDeliveries').and.callThrough();
      component.initPagination();
      expect(component.filterDeliveries).toHaveBeenCalled();
    });
  });
});
