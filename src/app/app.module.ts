import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnChangeParentComponent } from './on-change-parent/on-change-parent.component';
import { OnChangeChildComponent } from './on-change-child/on-change-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, OnChangeParentComponent, OnChangeChildComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
