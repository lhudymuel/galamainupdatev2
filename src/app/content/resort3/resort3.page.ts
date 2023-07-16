import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resort3',
  templateUrl: './resort3.page.html',
  styleUrls: ['./resort3.page.scss'],
})
export class Resort3Page  {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}

