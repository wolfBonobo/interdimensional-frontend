import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosPageContainer } from './todos-page.component';

describe('TodosPageContainer', () => {
  let component: TodosPageContainer;
  let fixture: ComponentFixture<TodosPageContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosPageContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosPageContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
