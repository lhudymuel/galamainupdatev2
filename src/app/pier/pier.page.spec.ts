import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PierPage } from './pier.page';

describe('PierPage', () => {
  let component: PierPage;
  let fixture: ComponentFixture<PierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
