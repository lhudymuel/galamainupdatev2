import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resort1',
  templateUrl: './resort1.page.html',
  styleUrls: ['./resort1.page.scss'],
})
export class Resort1Page  {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}


