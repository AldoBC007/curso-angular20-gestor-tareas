import { Component, inject } from '@angular/core';
import { TaskStore } from './features/tasks/task-store';
import { RouterOutlet } from '@angular/router';
import { TaskItem } from './shared/ui/task-item/task-item';
//import { Task } from './features/tasks/task';
//import { Task } from 'task-plugin-package';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskItem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'Gestor de Tareas';

  store = inject(TaskStore);
}
