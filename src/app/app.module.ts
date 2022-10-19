import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubGroupComponent } from './components/sub-group/sub-group.component';
import { ItemComponent } from './components/item/item.component';
import { GroupComponent } from './components/group/group.component';
import { FlexExampleComponent } from './flex-example/flex-example.component';
import { CellDirective } from './directives/cell.directive';
import { InlineGroupComponent } from './components/inline-group/inline-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SubGroupComponent,
    ItemComponent,
    GroupComponent,
    FlexExampleComponent,
    CellDirective,
    InlineGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
