import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe4',
  templateUrl: './cafe4.page.html',
  styleUrls: ['./cafe4.page.scss'],
})
export class Cafe4Page  {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
