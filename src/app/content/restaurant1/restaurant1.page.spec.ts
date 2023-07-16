import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Restaurant1Page } from './restaurant1.page';

describe('Restaurant1Page', () => {
  let component: Restaurant1Page;
  let fixture: ComponentFixture<Restaurant1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Restaurant1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
