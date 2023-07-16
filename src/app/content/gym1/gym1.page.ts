import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym1',
  templateUrl: './gym1.page.html',
  styleUrls: ['./gym1.page.scss'],
})
export class Gym1Page  {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed: ',e)
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
