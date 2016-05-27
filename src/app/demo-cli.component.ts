import { Component, OnInit } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';

import {MyFirstComponent} from './my-first.component';
import {MySecondComponent} from './my-second.component';
import {MyThirdComponent} from './my-third.component';

@Component({
  moduleId: module.id,
  selector: 'demo-cli-app',
  templateUrl: 'demo-cli.component.html',
  styleUrls: ['demo-cli.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/first', component: MyFirstComponent},
  {path: '/second', component: MySecondComponent},
  {path: '/third', component: MyThirdComponent}
])
export class DemoCliAppComponent implements OnInit {
  title = 'demo-cli works!';
  home: boolean = false;
  
  constructor(private router: Router) {}
  
  ngOnInit():any {
    if (window.location.pathname == '/')
      this.home = true;
  }
  
  isEmptyHome(): boolean {
    // console.log("UrlTree = ", this.router.routeTree);
    return false;
    
  }
  
}
