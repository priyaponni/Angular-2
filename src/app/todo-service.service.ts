import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoServiceService {

	lastId: number = 0;
	todos: Todo[] = [];
  constructor() { }

  addTodo(todo: Todo){
  	if(!todo.id){
  		todo.id = ++this.lastId;
  	}
  	this.todos.push(todo);
  	//return this;
  }
  getAllTodos(){
  	return this.todos;
  }
  getTodoById(id: number): Todo{
  	return this.todos.filter(todo => todo.id === id).pop();
  }
  updateTodo(id: number, values: Object={}): Todo{
  	let todo = this.getTodoById(id);
  	Object.assign(todo, values);
  	return todo;
  }
  toggleTodo(todo: Todo){
  	this.updateTodo(todo.id, {complete : !todo.complete}); 
  }

}
