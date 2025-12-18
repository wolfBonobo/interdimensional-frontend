import { Injectable } from '@angular/core';
import { Todo } from '@features/todos/domain/todo.model';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  getTodos(): Observable<Todo[]> {
    // Simulated HTTP call with a small delay
    const mock: Todo[] = [
      {
        id: 1,
        title: '1. Click "Use this template" on GitHub',
        completed: false,
      },
      {
        id: 2,
        title: '2. Create a new repository from this blueprint',
        completed: false,
      },
      {
        id: 3,
        title: '3. Clone your new repository locally',
        completed: false,
      },
      { id: 4, title: '4. Run: npm install', completed: false },
      { id: 5, title: '5. Run: npm start', completed: false },
      {
        id: 6,
        title: '6. Start building your Angular application',
        completed: false,
      },
    ];

    return of(mock).pipe(delay(600));
  }
}
