import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resort5',
  templateUrl: './resort5.page.html',
  styleUrls: ['./resort5.page.scss'],
})
export class Resort5Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}