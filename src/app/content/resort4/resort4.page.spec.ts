import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Resort4Page } from './resort4.page';

describe('Resort4Page', () => {
  let component: Resort4Page;
  let fixture: ComponentFixture<Resort4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Resort4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
