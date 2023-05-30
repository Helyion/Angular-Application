import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  taskForm = new FormGroup({
    task: new FormControl("",[Validators.required])
    });


  @Output() AddTaskEvent = new EventEmitter<string>();

  emitAddTask() {
    this.AddTaskEvent.emit(this.taskForm.controls.task.value as string);
  }
}
