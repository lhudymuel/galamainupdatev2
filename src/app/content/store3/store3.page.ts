import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store3',
  templateUrl: './store3.page.html',
  styleUrls: ['./store3.page.scss'],
})
export class Store3Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

