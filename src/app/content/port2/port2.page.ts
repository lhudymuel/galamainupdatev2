import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-port2',
  templateUrl: './port2.page.html',
  styleUrls: ['./port2.page.scss'],
})
export class Port2Page {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
