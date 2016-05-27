import {Component} from '@angular/core';
import {ColoredDirective} from './shared/colored.directive';

@Component({
	selector: 'my-second',
	template: `
		<div>
			<p>And now the second component</p>
			<label>Color (Retrieve the Game Behind):</label>
			<input type="text" [(ngModel)]="myColor">
		</div>
		<div>
			<h4>Let's use a custom directive</h4>
			<p colored [wha]="myColor" >I want a cursor here,<br> what color have you chosen?</p>
		</div>
		<div *ngIf="hasColor(myColor)">
			<p [ngStyle]="{color: myColor}">YOU DISCOVERED AN HIDDEN TEXT</p>
		</div>
	`,
	directives: [ColoredDirective]
})
export class MySecondComponent {
	myColor: string = "";
	
	hasColor(val: string): boolean {
		if (!val)
			return false;
		let value = val.toLowerCase();
		if (value == 'red' || value == 'green' || value == 'blue') {
			return true;
		} else {
			return false;
		}
	}

}