import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store4',
  templateUrl: './store4.page.html',
  styleUrls: ['./store4.page.scss'],
})
export class Store4Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

