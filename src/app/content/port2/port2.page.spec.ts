import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Port2Page } from './port2.page';

describe('Port2Page', () => {
  let component: Port2Page;
  let fixture: ComponentFixture<Port2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Port2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
