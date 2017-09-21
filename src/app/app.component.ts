import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { WrapperComponent } from './common/wrapper/wrapper.component';
import { LoaderComponent } from './common/loader/loader.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  toggleClass: boolean = false;

  ngOnInit() {
    console.log('Page loaded');
  }

  sidebarStatus($event) {
    this.toggleClass = $event;
  }

  wrpperClick($event) {
    this.toggleClass = false;
  }
}
