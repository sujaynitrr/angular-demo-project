import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { OnChangeChildComponent } from '../on-change-child/on-change-child.component';

@Component({
  selector: 'app-on-change-parent',
  templateUrl: './on-change-parent.component.html',
  styleUrls: ['./on-change-parent.component.scss'],
})
export class OnChangeParentComponent {
  hero!: Hero;
  power = '';
  title = 'OnChanges';
  @ViewChild(OnChangeChildComponent) childView!: OnChangeChildComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
