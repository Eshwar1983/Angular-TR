import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() reviews: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.notify.emit('Message from child');
    console.log('Child element home clicked');
  }

  isMenuOpen:boolean = false;
  sidebar = 'out';
  
  menuStatus(this){
    this.isMenuOpen = !this.isMenuOpen;
    console.log('side bar clicked');


    /*this.sidebar = this.sidebar === 'out' ? 'in' : 'out';

    if (this.sidebar === 'in') {
      //document.body.classList.add('sidebar-open');
      document.getElementById('mainWrap').classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
      document.getElementById('mainWrap').classList.remove('sidebar-open')
    }*/
  }

}
