import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainGroupComponent } from './main-group/main-group.component';
import { ColumnComponent } from './column/column.component';
import { RowComponent } from './row/row.component';
import { SeperatorComponent } from './seperator/seperator.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGroupComponent,
    ColumnComponent,
    RowComponent,
    SeperatorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
