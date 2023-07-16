import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resort6',
  templateUrl: './resort6.page.html',
  styleUrls: ['./resort6.page.scss'],
})
export class Resort6Page  {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
