import { Injectable } from '@angular/core';
import {Item} from './item.model';

@Injectable()
export class ItemService {
    items: Item[];

    constructor() {
        this.items = [];
     }
    
    addItem(item: Item): void {
        this.items.push(item);
    }
    
    getItems() {
        return this.items;
    }
    
    removeItem(item: Item) {
        let index = this.items.indexOf(item);
        this.items.splice(index);
    }

}