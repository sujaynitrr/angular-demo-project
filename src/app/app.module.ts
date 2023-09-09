import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeekABooParentComponent } from './peek-aboo-parent/peek-aboo-parent.component';
import { PeekABooComponentComponent } from './peek-aboo-component/peek-aboo-component.component';
import { PeekABooDirective } from './peek-aboo.directive';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooParentComponent,
    PeekABooComponentComponent,
    PeekABooDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
