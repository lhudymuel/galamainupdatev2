import { Component } from '@angular/core';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-cam',
  templateUrl: './cam.page.html',
  styleUrls: ['./cam.page.scss'],
})
export class CamPage {
  searchTerm = '';

  constructor(private searchService: SearchService) {}

  onSearch(event: any) {
    this.searchTerm = event.target.value;
    this.searchService.searchItems(this.searchTerm);
  }

  getFilteredItems() {
    return this.searchService.getFilteredItems();
  }
}
