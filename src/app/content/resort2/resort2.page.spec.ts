import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Resort2Page } from './resort2.page';

describe('Resort2Page', () => {
  let component: Resort2Page;
  let fixture: ComponentFixture<Resort2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Resort2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
