import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosStatsComponent } from './todos-stats.component';

describe('TodosStatsComponent', () => {
  let component: TodosStatsComponent;
  let fixture: ComponentFixture<TodosStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
