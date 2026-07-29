import { Component, input, Input, output } from '@angular/core';
import { Task } from '../../../features/tasks/task';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {

    task = input.required<Task>();

    toggle = output<number>();
    removed = output<number>();

}
