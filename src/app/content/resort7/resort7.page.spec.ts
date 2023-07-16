import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Resort7Page } from './resort7.page';

describe('Resort7Page', () => {
  let component: Resort7Page;
  let fixture: ComponentFixture<Resort7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Resort7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
