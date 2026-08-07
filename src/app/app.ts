import { Component, inject } from '@angular/core';
//import { TaskStore } from './features/tasks/task-store';
import { RouterOutlet } from '@angular/router';
//import { TaskItem } from './shared/ui/task-item/task-item';
//Tarea 3
//import { TaskForm } from './shared/ui/task-form/task-form';
//import { Task } from './features/tasks/task';
//import { Task } from 'task-plugin-package';

//Tarea 3
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'Gestor de Tareas';
}
