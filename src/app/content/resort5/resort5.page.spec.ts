import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Resort5Page } from './resort5.page';

describe('Resort5Page', () => {
  let component: Resort5Page;
  let fixture: ComponentFixture<Resort5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Resort5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
