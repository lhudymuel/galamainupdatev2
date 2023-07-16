import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cafe1Page } from './cafe1.page';

describe('Cafe1Page', () => {
  let component: Cafe1Page;
  let fixture: ComponentFixture<Cafe1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cafe1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
