import {Component} from '@angular/core';

@Component({
	selector: 'my-presentation',
	template: `
		<div>
			<h2>Doing some tricks with text and its style</h2>
			<div>
				<label>Insert a color name:</label>
				<input type="text" (keyup)="0" #color>
				<br>
				<label>Insert the font size:</label>
				<input type="text" (keyup)="0" #fontSize>
				<hr>
				<p [ngStyle]="{color: color.value, fontSize: fontSize.value + 'px'}">{{myText}}</p>
				<hr>
			</div>
		</div>
	`
})
export class MyFirstComponent {
	myText: string = "THIS IS THE MAGIG STUPID TEXT!";
}