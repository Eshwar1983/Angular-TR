import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-ng-switch',
  templateUrl: './directives-ng-switch.component.html',
  styleUrls: ['./directives-ng-switch.component.scss']
})
export class DirectivesNgSwitchComponent implements OnInit {

  title: string = 'ngSwitch Example';
  num: number = 0;

  items: item[] = [{ name: 'One', val: 1 }, { name: 'Two', val: 2 }, { name: 'Three', val: 3 }];
  selectedValue: string = 'One';
  toDate: Date = new Date();
  celcius: number;
  Fahrenheit: number;
  cur: number= 175;

  constructor() { }

  ngOnInit() {
  }

}

class item {
  name: string;
  val: number;
}
