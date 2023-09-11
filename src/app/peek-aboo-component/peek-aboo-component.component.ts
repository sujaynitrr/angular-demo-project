import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PeekABooDirective } from '../peek-aboo.directive';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-peek-a-boo-component',
  templateUrl: './peek-a-boo-component.component.html',
  styleUrls: ['./peek-a-boo-component.component.scss'],
})
export class PeekABooComponentComponent
  extends PeekABooDirective
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name: any;
  private verb = 'initialized';
  constructor(logger: LoggerService) {
    super(logger);
    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }
  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges) {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'name') {
        const name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    this.logIt('DoCheck');
  }

  ngAfterContentInit() {
    this.logIt('AfterContentInit');
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    this.logIt('AfterContentChecked');
  }

  ngAfterViewInit() {
    this.logIt('AfterViewInit');
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    this.logIt('AfterViewChecked');
  }

  ngOnDestroy() {
    this.logIt('OnDestroy');
  }
}
