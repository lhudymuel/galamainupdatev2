import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe2',
  templateUrl: './cafe2.page.html',
  styleUrls: ['./cafe2.page.scss'],
})
export class Cafe2Page  {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

