import { Routes } from '@angular/router';
import { TodosPageContainer } from '@features/todos/pages/todos-page/todos-page.component';

export const routes: Routes = [
  {
    path: '',
    component: TodosPageContainer,
  },
  // You can add additional feature routes here in the future
];
