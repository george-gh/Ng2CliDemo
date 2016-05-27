import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'selector',
    template: `
        <div>
            <h4>This is totally unuseful</h4>
        </div>
    `
})
export class SubInfoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}