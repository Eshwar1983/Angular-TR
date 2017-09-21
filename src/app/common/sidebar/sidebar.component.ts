import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() isMenuOpen: boolean;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  menuStatus($event){
    this.isMenuOpen = !this.isMenuOpen;
    this.notify.emit(this.isMenuOpen);
    $event.stopPropagation();
  }

  stopPropagation($event){
    $event.stopPropagation();
  }
}
