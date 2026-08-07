import { Component, inject } from '@angular/core';
import { TaskItem } from '../../../shared/ui/task-item/task-item';
import { TaskForm } from '../../../shared/ui/task-form/task-form';
import { TaskStore } from '../../tasks/task-store';
//import { TaskStore } from '../task-store';

@Component({
  selector: 'app-lista-tareas',
  imports: [TaskItem, TaskForm],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css',
})
export class ListaTareas {
  store = inject(TaskStore);
}
