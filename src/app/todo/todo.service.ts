import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private idCounter: number = 0;

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    todo.id = ++this.idCounter;
    this.todos.push(todo);
  }

  updateTodo(todo: Todo): void {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
