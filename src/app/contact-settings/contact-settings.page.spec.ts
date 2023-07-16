import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSettingsPage } from './contact-settings.page';

describe('ContactSettingsPage', () => {
  let component: ContactSettingsPage;
  let fixture: ComponentFixture<ContactSettingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
