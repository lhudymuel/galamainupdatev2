import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Restaurant2Page } from './restaurant2.page';

describe('Restaurant2Page', () => {
  let component: Restaurant2Page;
  let fixture: ComponentFixture<Restaurant2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Restaurant2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
