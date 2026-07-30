import { Component, input, Input, output } from '@angular/core';
import { Task } from '../../../features/tasks/task';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  //task = input.required<Task>();
  //Tarea 3
  agregado = output<string>();
}
