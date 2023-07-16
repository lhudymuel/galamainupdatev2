import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resort2',
  templateUrl: './resort2.page.html',
  styleUrls: ['./resort2.page.scss'],
})
export class Resort2Page  {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}


