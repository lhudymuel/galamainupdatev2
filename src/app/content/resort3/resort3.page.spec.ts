import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Resort3Page } from './resort3.page';

describe('Resort3Page', () => {
  let component: Resort3Page;
  let fixture: ComponentFixture<Resort3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Resort3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
