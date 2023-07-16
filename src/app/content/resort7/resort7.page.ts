import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resort7',
  templateUrl: './resort7.page.html',
  styleUrls: ['./resort7.page.scss'],
})
export class Resort7Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
