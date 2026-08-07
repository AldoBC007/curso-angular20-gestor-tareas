import { Routes } from '@angular/router';
import { ListaTareas } from './features/tareas/lista-tareas/lista-tareas';

export const routes: Routes = [
 {
    path: '',
    component: ListaTareas,
  },
  {
    path: 'tarea/:id',
    loadComponent: () => import('./features/tareas/detalle-tarea/detalle-tarea').then((m) => m.DetalleTarea),
  }
];
