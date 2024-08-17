import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MenuComponent]
    }).compileComponents();
  });
  it('should create', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
