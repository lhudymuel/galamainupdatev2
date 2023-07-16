import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant1',
  templateUrl: './restaurant1.page.html',
  styleUrls: ['./restaurant1.page.scss'],
})
export class Restaurant1Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
