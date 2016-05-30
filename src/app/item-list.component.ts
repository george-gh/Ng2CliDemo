import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Item} from './shared/item.model';
import {ItemDetailComponent} from './item-detail.component';

@Component({
    moduleId: module.id,
    selector: 'item-list',
    template: `
        <div *ngIf="myList.length > 0">
            <h3>List of items</h3>
            <ul>
                <li *ngFor="let item of myList">
                    <span class="deleter">
                        <a (click)="onSelectItem(item)">{{item.name}}</a>
                    </span>
                    <button class="deleteBtn" (click)="onDelete(item)">Delete</button>
                </li>
            </ul>
        </div>
        <button *ngIf="selectedItem" (click)="removeItem()">Close details</button>
        <item-detail [selectedItem]="selectedItem" *ngIf="selectedItem"></item-detail>
    `,
    styleUrls: ['item-list.component.css'],
    inputs: ['myList'],
    outputs: ['deletedItem', 'selectedItem'],
    directives: [ItemDetailComponent]
})
export class ItemListComponent implements OnInit {
    deletedItem: EventEmitter<Item> = new EventEmitter<Item>();
    selectedItem: Item | Object;
    
    constructor() { }

    ngOnInit() { }
    
    onDelete(item: Item) {
        this.deletedItem.emit(item);
        if (this.selectedItem == item)
            this.selectedItem = null;
    }
    
    onSelectItem(item: Item): void {
        this.selectedItem = item;      
    }
    
    removeItem() {
        this.selectedItem = null;
    }

}