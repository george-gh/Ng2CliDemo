import { Component, OnInit } from '@angular/core';
import {FORM_DIRECTIVES, FORM_PROVIDERS, FormBuilder, Control, ControlGroup} from '@angular/common';
import {ItemService} from './shared/item.service';
import {ItemListComponent} from './item-list.component';
import {Item} from './shared/item.model';

@Component({
    moduleId: module.id,
    selector: 'my-sub',
    styleUrls: ['my-sub.component.css'],
    template: `
        <div>
            <h4>I am the sub component</h4>
            <form (ngSubmit)="onSubmit()" [ngFormModel]="myForm">
                <div class="form-element">
				    <label for="name">Name:</label>
                    <input type="text" id="name" [ngFormControl]="myForm.controls['name']" #name="ngForm">
                </div>
                <div class="form-element">
                    <label for="surname">Surname:</label>
                    <input type="text" id="surname" [ngFormControl]="myForm.controls['surname']" #surname="ngForm">
                </div>
                <div class="form-element">
                    <label for="email">Email:</label>
                    <input type="text" id="email" [ngFormControl]="myForm.controls['email']" #email="ngForm">
                </div>
                <button type="submit">Submit</button>
			</form>
            <item-list [myList]="getList()" (deletedItem)="onDelete(event)"></item-list>
        </div>
    `,
    directives: [FORM_DIRECTIVES, ItemListComponent],
    providers: [FORM_PROVIDERS, ItemService],
    inputs: ['deletedItem']
})
export class MySubComponent implements OnInit {
    myForm: ControlGroup;
    
    constructor(private fb: FormBuilder, private itemServ: ItemService) { }

    ngOnInit() { 
        this.myForm = this.fb.group({
            'name': [''],
            'surname': [''],
            'email': ['']
        })
    }
    
    onSubmit() {
        console.log('Form submitted!', this.myForm.value);
        this.itemServ.addItem(this.myForm.value);
        this.emptyForm();
    }
    
    getList() {
        return this.itemServ.getItems();
    }
    
    emptyForm() {
        this.ngOnInit();
    }
    
    onDelete(item: Item) {
        this.itemServ.removeItem(item);
    }

}