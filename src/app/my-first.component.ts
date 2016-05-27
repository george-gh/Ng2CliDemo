import {Component} from '@angular/core';

@Component({
	selector: 'my-presentation',
	template: `
		<div>
			<h2>This is the first component</h2>
			<div>
				<label>Insert a color name:</label>
				<input type="text" (keyup)="0" #color>
				<br>
				<label>Insert the font size:</label>
				<input type="text" (keyup)="0" #fontSize>
				<p [ngStyle]="{color: color.value, fontSize: fontSize.value + 'px'}">{{myText}}</p>
			</div>
			<div class="debug">
				<pre>Color value: {{color.value}}</pre>
			</div>
		</div>
	`
})
export class MyFirstComponent {
	myText: string = "THIS IS OUR OUTPUT!";
}