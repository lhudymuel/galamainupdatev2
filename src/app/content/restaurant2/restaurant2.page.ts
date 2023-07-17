import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant2',
  templateUrl: './restaurant2.page.html',
  styleUrls: ['./restaurant2.page.scss'],
})
export class Restaurant2Page  {

  constructor() { }
  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}