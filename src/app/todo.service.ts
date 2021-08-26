import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  api: string

  constructor(private http: HttpClient) {
    this.api = 'https://jsonplaceholder.typicode.com/todos';
    console.log(this.api)
  }

  fetchTodos() {
    return this.http.get<Todo[]>(this.api);
  }

  deleteTodo(id: number) {
    return this.http.delete(this.api + '/' + id);
  }

  addTodo(payload: Todo) {
    return this.http.post<Todo>(this.api, payload);
  }

  updateTodo(payload: Todo, id: number) {
    return this.http.put<Todo>(this.api + '/' + id, payload);
  }
}
