import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-port1',
  templateUrl: './port1.page.html',
  styleUrls: ['./port1.page.scss'],
})
export class Port1Page  {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}


