import { Component, OnInit } from '@angular/core';
import { PeekABooDirective } from '../peek-aboo.directive';

@Component({
  selector: 'app-peek-a-boo-component',
  templateUrl: './peek-a-boo-component.component.html',
  styleUrls: ['./peek-a-boo-component.component.scss'],
})
export class PeekABooComponentComponent
  extends PeekABooDirective
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
