import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Port1Page } from './port1.page';

describe('Port1Page', () => {
  let component: Port1Page;
  let fixture: ComponentFixture<Port1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Port1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
