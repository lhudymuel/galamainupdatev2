import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gym1Page } from './gym1.page';

describe('Gym1Page', () => {
  let component: Gym1Page;
  let fixture: ComponentFixture<Gym1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Gym1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
