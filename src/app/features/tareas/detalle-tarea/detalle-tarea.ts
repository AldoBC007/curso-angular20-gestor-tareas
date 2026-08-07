import { Component, computed, inject, input } from '@angular/core';
import { TaskStore } from '../../tasks/task-store';

@Component({
  selector: 'app-detalle-tarea',
  imports: [],
  templateUrl: './detalle-tarea.html',
  styleUrl: './detalle-tarea.css',
})
export class DetalleTarea {
  private store = inject(TaskStore);

  id = input.required<string>();

  tarea = computed(() => this.store.tareas().find((t) => t.id === Number(this.id())));
}
