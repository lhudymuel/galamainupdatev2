import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cafe4Page } from './cafe4.page';

describe('Cafe4Page', () => {
  let component: Cafe4Page;
  let fixture: ComponentFixture<Cafe4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cafe4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
