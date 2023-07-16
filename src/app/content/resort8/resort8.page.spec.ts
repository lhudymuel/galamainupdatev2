import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Resort8Page } from './resort8.page';

describe('Resort8Page', () => {
  let component: Resort8Page;
  let fixture: ComponentFixture<Resort8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Resort8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
