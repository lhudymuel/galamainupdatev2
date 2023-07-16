import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store1',
  templateUrl: './store1.page.html',
  styleUrls: ['./store1.page.scss'],
})
export class Store1Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

