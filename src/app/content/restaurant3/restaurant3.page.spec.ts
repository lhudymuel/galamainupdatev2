import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Restaurant3Page } from './restaurant3.page';

describe('Restaurant3Page', () => {
  let component: Restaurant3Page;
  let fixture: ComponentFixture<Restaurant3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Restaurant3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
