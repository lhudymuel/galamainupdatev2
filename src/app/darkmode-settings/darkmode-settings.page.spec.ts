import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkmodeSettingsPage } from './darkmode-settings.page';

describe('DarkmodeSettingsPage', () => {
  let component: DarkmodeSettingsPage;
  let fixture: ComponentFixture<DarkmodeSettingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DarkmodeSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
