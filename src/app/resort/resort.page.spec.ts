import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResortPage } from './resort.page';

describe('ResortPage', () => {
  let component: ResortPage;
  let fixture: ComponentFixture<ResortPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
