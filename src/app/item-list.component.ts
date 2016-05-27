import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Item} from './shared/item.model';

@Component({
    moduleId: module.id,
    selector: 'item-list',
    template: `
        <div *ngIf="myList.length > 0">
            <h3>List of items</h3>
            <ul>
                <li *ngFor="let item of myList">
                    {{item.name}} <span class="deleter"><button (click)="onDelete(item)">Delete</button></span>
                </li>
            </ul>
        </div>
    `,
    styles: ['{deleter: cursor = pointer;}'],
    inputs: ['myList'],
    outputs: ['deletedItem']
})
export class ItemListComponent implements OnInit {
    deletedItem: EventEmitter<Item> = new EventEmitter<Item>();
    
    constructor() { }

    ngOnInit() { }
    
    onDelete(item: Item) {
        this.deletedItem.emit(item);
    }

}