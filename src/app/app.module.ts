import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { ColumnComponent } from './column/column.component';
import { MockFieldComponent } from './mock-field/mock-field.component';
import { MockFieldGroupComponent } from './mock-field-group/mock-field-group.component';
import { CellDirective } from './cell.directive';
import { SeparatorDirective } from './separator.directive';
import { TitleComponent } from './title/title.component';
import { GridLayoutingComponent } from './grid-layouting/grid-layouting.component';
import { GridMultiColumnComponent } from './grid-multi-column/grid-multi-column.component';
import { GridSubGroupsComponent } from './grid-sub-groups/grid-sub-groups.component';
import { SubGroupComponent } from './sub-group/sub-group.component';

@NgModule({
    declarations: [
        AppComponent,
        GroupComponent,
        ColumnComponent,
        MockFieldComponent,
        MockFieldGroupComponent,
        CellDirective,
        SeparatorDirective,
        TitleComponent,
        GridLayoutingComponent,
        GridMultiColumnComponent,
        GridSubGroupsComponent,
        SubGroupComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
