import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '@features/todos/domain/todo.model';

@Component({
  selector: 'app-todos-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-stats.component.html',
  styleUrl: './todos-stats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosStatsComponent {
  @Input() todos: Todo[] | null = [];

  get total(): number {
    return this.todos?.length ?? 0;
  }

  get completed(): number {
    return this.todos?.filter((t) => t.completed).length ?? 0;
  }

  get pending(): number {
    return this.total - this.completed;
  }
}
