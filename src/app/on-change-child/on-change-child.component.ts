import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-on-change-child',
  templateUrl: './on-change-child.component.html',
  styleUrls: ['./on-change-child.component.scss'],
})
export class OnChangeChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() hero!: Hero;
  @Input() power = '';

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'changes');
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }

  reset() {
    this.changeLog = [];
  }
}
