import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Resort1Page } from './resort1.page';

describe('Resort1Page', () => {
  let component: Resort1Page;
  let fixture: ComponentFixture<Resort1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Resort1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
