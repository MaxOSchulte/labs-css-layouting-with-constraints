import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexExampleComponent } from './flex-example/flex-example.component';

const routes: Routes = [{path: 'flex', component: FlexExampleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

