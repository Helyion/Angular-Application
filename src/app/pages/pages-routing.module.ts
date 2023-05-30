import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TodoComponent} from "./todo/todo.component";
import {PlayoutComponent} from "./playout/playout.component";

const routes: Routes = [
  {
    path: '', component: PlayoutComponent, children:[
      { path: '', redirectTo: 'home', pathMatch: 'full'},

      { path: 'home', component: HomeComponent},
      { path: 'todo', component: TodoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
