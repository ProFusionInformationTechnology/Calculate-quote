import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlockAreaComponent } from './component/block-area/block-area.component';
import { BlockAreaSpecialComponent } from './component/block-area-special/block-area-special.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockAreaComponent,
    BlockAreaSpecialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
