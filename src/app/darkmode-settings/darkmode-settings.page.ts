import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode-settings',
  templateUrl: './darkmode-settings.page.html',
  styleUrls: ['./darkmode-settings.page.scss'],
})
export class DarkmodeSettingsPage{

  constructor() { }

 toggleTheme(event: any) {
  if(event.detail.checked){
    document.body.setAttribute('color-theme','dark')
  }else{
    document.body.setAttribute('color-theme','light')
  }
 }

}
