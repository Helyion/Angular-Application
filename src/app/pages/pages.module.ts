import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { PagesRoutingModule } from "./pages-routing.module";
import { PlayoutComponent } from './playout/playout.component';
import { PheaderComponent } from './pheader/pheader.component';
import { AddTaskComponent } from './addtask/add-task.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './tasklist/task-list.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HomeComponent,
    TodoComponent,
    PlayoutComponent,
    PheaderComponent,
    AddTaskComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    NgOptimizedImage
  ]
})
export class PagesModule { }
