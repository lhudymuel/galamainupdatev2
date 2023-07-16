import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private items: string[] = ['Apple', 'Banana', 'Orange', 'Grapes', 'Kiwi'];
  private filteredItems: string[] = [];

  searchItems(searchTerm: string) {
    this.filteredItems = this.items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getFilteredItems() {
    return this.filteredItems;
  }
}
