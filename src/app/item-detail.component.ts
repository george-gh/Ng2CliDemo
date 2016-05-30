import { Component, OnInit, Input } from '@angular/core';
import { Item } from './shared/item.model';

@Component({
    moduleId: module.id,
    selector: 'item-detail',
    template: `
        <div>
            <hr>
            <h4>{{selectedItem.name | uppercase}}</h4>
            <p>Email: {{selectedItem.email}}</p>
            <p>Surname: {{selectedItem.surname}}</p>
            <hr>
        </div>
        `
})
export class ItemDetailComponent implements OnInit {
    
    @Input() selectedItem: Item;
    
    constructor() { }

    ngOnInit() { }

}