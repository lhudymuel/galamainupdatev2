import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe3',
  templateUrl: './cafe3.page.html',
  styleUrls: ['./cafe3.page.scss'],
})
export class Cafe3Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
