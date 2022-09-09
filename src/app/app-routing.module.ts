import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridLayoutingComponent } from './pages/grid-layouting/grid-layouting.component';
import { GridMultiColumnComponent } from './pages/grid-multi-column/grid-multi-column.component';
import { GridSubGroupsComponent } from './pages/grid-sub-groups/grid-sub-groups.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'grid' },
    { path: 'grid', component: GridLayoutingComponent },
    { path: 'multi-column', component: GridMultiColumnComponent },
    { path: 'sub-groups', component: GridSubGroupsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
