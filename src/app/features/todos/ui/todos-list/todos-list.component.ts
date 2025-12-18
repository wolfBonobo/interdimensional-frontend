import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '@features/todos/domain/todo.model';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent {
  @Input() todos: Todo[] | null = [];
  @Input() loading = false;

  @Output() toggle = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<Todo>();

  trackById(_index: number, todo: Todo): number {
    return todo.id;
  }
}
