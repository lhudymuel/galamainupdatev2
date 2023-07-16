import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resort8',
  templateUrl: './resort8.page.html',
  styleUrls: ['./resort8.page.scss'],
})
export class Resort8Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
