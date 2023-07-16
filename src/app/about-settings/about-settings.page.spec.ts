import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutSettingsPage } from './about-settings.page';

describe('AboutSettingsPage', () => {
  let component: AboutSettingsPage;
  let fixture: ComponentFixture<AboutSettingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
