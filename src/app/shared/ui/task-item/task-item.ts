import { Component, input, Input, output } from '@angular/core';
import { Task } from '../../../features/tasks/task';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-item',
  imports: [RouterLink],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {

    task = input.required<Task>();

    toggle = output<number>();
    removed = output<number>();

}
