import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoTrixComponent} from "./features/demo-trix/demo-trix.component";
import {DemoDndComponent} from "./features/demo-dnd/demo-dnd.component";

const routes: Routes = [
  { path: 'trix', component: DemoTrixComponent},
  { path: 'dnd', component: DemoDndComponent},
  { path: '', redirectTo: 'trix', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
