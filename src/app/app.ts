import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task';
//import { Task } from 'task-plugin-package';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'Gestor de Tareas';

  tareas = signal<Task[]>([
    { id: 1, titulo: 'Aprender Angular', completada: false },
    { id: 2, titulo: 'Construir Proyecto', completada: false },
    { id: 3, titulo: 'Dominar signals', completada: true },
  ]);

  agregar(titulo: string): void {
    const limpio = titulo.trim();
    if (!limpio) {
      return;
    }
    this.tareas.update((lista) => [
      ...lista,
      { id: Date.now(), titulo: limpio, completada: false },
    ]);
  }

  toggle(id: number): void {
    this.tareas.update((lista) =>
      lista.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  }

  //Tarea 1
  eliminar(id: number): void {
    this.tareas.update((tareas) => tareas.filter((tarea) => tarea.id !== id));
  }
}
