import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cafe2Page } from './cafe2.page';

describe('Cafe2Page', () => {
  let component: Cafe2Page;
  let fixture: ComponentFixture<Cafe2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cafe2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
