import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'About', url: '/about-settings', icon: 'information-circle' },
    { title: 'Contact', url: '/contact-settings', icon: 'chatbox-ellipses' },
    { title: 'Setting', url: '/darkmode-settings', icon: 'build' },
    { title: 'Home', url: '/welcome', icon: 'home' },
   
  ];
  public labels = [];
  
}
