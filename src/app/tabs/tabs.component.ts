import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor() {}
  ngAfterContentInit() {
    // Select the first tab by default
    const defaultTab = this.tabs.first;
    if (defaultTab) {
      defaultTab.selected = true;
    }
  }

  selectTab(selectedTab: TabComponent) {
    this.tabs.forEach((tab) => (tab.selected = false));
    selectedTab.selected = true;
  }
}
