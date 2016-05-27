import {Component} from '@angular/core';
import {MySubComponent} from './my-sub.component';
import {SubInfoComponent} from './sub-info.component';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
	selector: 'my-third',
	template: `
		<div>
			<p>Third and last one component</p>
			<ul>
				<li><a [routerLink]="['/info']">Info</a></li>
				<li><a [routerLink]="['/sub']">Add user</a></li>
			</ul>
			<my-sub></my-sub>			
		</div>
	`,
	directives: [MySubComponent, ROUTER_DIRECTIVES]
})
@Routes([
	{path: '/sub', component: MySubComponent},
	{path: '/info', component: SubInfoComponent}
])
export class MyThirdComponent {
	/*
	constructor(private router:Router) {}

	goToForm(): void {
		this.router.navigate(['/sub']);
	}
	*/
}