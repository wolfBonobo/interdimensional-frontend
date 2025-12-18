import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Todo } from '@features/todos/domain/todo.model';
import { TodosListComponent } from '@features/todos/ui/todos-list/todos-list.component';
import { TodosStatsComponent } from '@features/todos/ui/todos-stats/todos-stats.component';
import { TodosFacade } from '../../data-access/todos.facade';

@Component({
  selector: 'app-todos-page',
  standalone: true,
  imports: [CommonModule, TodosListComponent, TodosStatsComponent],
  templateUrl: './todos-page.component.html',
  styleUrl: './todos-page.component.css',
})
export class TodosPageContainer implements OnInit {
  private readonly facade = inject(TodosFacade);

  readonly todos$ = this.facade.todos$;
  readonly loading$ = this.facade.loading$;

  ngOnInit(): void {
    this.facade.loadTodos();
  }

  onToggle(todo: Todo): void {
    this.facade.toggle(todo);
  }

  onRemove(todo: Todo): void {
    this.facade.remove(todo);
  }
}
