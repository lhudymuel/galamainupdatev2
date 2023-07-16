import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resort4',
  templateUrl: './resort4.page.html',
  styleUrls: ['./resort4.page.scss'],
})
export class Resort4Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
