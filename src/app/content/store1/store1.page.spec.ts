import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store1Page } from './store1.page';

describe('Store1Page', () => {
  let component: Store1Page;
  let fixture: ComponentFixture<Store1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Store1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
