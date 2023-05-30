import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title = 'devWebAngular';

  constructor() {
  }
  tasks : string[] = [];
  nbTasks: number = 0;

  addTask(newTask: string){
    this.tasks.push(newTask);
    this.nbTasks = this.tasks.length;
  }

}
