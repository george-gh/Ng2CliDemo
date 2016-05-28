import {Component} from '@angular/core';
import {MySubComponent} from './my-sub.component';
import {SubInfoComponent} from './sub-info.component';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
	selector: 'my-third',
	template: `
		<div>
			<h2>Subrouting and user list management</h2>
			<nav class="sub-menu">
				<ul>
					<li [ngClass]='{selected : isCurrentRoute()}'><a [routerLink]="['/info']">Info</a></li>
					<li><a [routerLink]="['/sub']">Add an user</a></li>
				</ul>
			</nav>
			<hr>
			<router-outlet></router-outlet>
			<h3>I need to fix the subrouting, damn!</h3>
			<hr>	
			<my-sub></my-sub>	
		</div>
	`,
	styleUrls: ['./app/my-third.component.css'],
	directives: [MySubComponent, ROUTER_DIRECTIVES]
})
@Routes([
	{path: '/sub', component: MySubComponent},
	{path: '/info', component: SubInfoComponent}
])
export class MyThirdComponent {
	constructor(private router:Router) {}

	goToForm(): void {
		this.router.navigate(['/sub']);
	}
	
	isCurrentRoute(currentRoute: string) {
		return true;
	}
	
}