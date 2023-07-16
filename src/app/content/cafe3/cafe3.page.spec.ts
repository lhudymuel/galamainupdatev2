import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cafe3Page } from './cafe3.page';

describe('Cafe3Page', () => {
  let component: Cafe3Page;
  let fixture: ComponentFixture<Cafe3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cafe3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
