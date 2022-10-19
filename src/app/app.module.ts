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
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TitleComponent } from './components/title/title.component';
import { InlineTitleComponent } from './components/inline-title/inline-title.component';
import { LargeItemComponent } from './components/large-item/large-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SubGroupComponent,
    ItemComponent,
    GroupComponent,
    FlexExampleComponent,
    CellDirective,
    InlineGroupComponent,
    TitleComponent,
    InlineTitleComponent,
    LargeItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
