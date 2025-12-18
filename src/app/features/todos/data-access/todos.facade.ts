import { Injectable, inject } from '@angular/core';
import { TodosService } from '@features/todos/data-access/todos.service';
import { Todo } from '@features/todos/domain/todo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosFacade {
  private readonly todosService = inject(TodosService);

  private readonly todosSubject = new BehaviorSubject<Todo[]>([]);
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);

  readonly todos$ = this.todosSubject.asObservable();
  readonly loading$ = this.loadingSubject.asObservable();

  loadTodos(): void {
    this.loadingSubject.next(true);

    this.todosService.getTodos().subscribe({
      next: (todos) => {
        this.todosSubject.next(todos);
        this.loadingSubject.next(false);
      },
      error: () => {
        this.loadingSubject.next(false);
      },
    });
  }

  toggle(todo: Todo): void {
    const updated = this.todosSubject.value.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t,
    );
    this.todosSubject.next(updated);
  }

  remove(todo: Todo): void {
    const updated = this.todosSubject.value.filter((t) => t.id !== todo.id);
    this.todosSubject.next(updated);
  }
}
