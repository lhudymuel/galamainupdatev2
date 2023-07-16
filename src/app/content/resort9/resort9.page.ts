import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resort9',
  templateUrl: './resort9.page.html',
  styleUrls: ['./resort9.page.scss'],
})
export class Resort9Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}