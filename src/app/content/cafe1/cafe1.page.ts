import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe1',
  templateUrl: './cafe1.page.html',
  styleUrls: ['./cafe1.page.scss'],
})
export class Cafe1Page  {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
}
