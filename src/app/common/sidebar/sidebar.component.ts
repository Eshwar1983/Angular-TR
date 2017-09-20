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

  @Input() reviews: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  isClass: boolean = false;

  /*onClick(): void {
    console.log('Child element home clicked');
  }*/

  isMenuOpen:boolean = false;
  //sidebar = 'out';
  
  menuStatus(this){
    this.isClass = !this.isClass;
    this.notify.emit(this.isClass);
    this.isMenuOpen = !this.isMenuOpen;
    //console.log('side bar clicked');
  }

}
