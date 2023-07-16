import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store2',
  templateUrl: './store2.page.html',
  styleUrls: ['./store2.page.scss'],
})
export class Store2Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

