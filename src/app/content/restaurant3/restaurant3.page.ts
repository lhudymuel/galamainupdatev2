import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant3',
  templateUrl: './restaurant3.page.html',
  styleUrls: ['./restaurant3.page.scss'],
})
export class Restaurant3Page  {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
