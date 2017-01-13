import { Component } from '@angular/core';
import {Todo} from './todo';
import {TodoServiceService} from './todo-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoServiceService]
})

export class AppComponent {

  newTodo: Todo = new Todo();
  constructor(private todoService : TodoServiceService){

  }
  addTodo(){
  	console.log('addservice');
  	this.todoService.addTodo(this.newTodo);
  	this.newTodo = new Todo();
  }
  toggle(todo){
  	this.todoService.toggleTodo(todo);
  }
  get todos(){
  	return this.todoService.getAllTodos();
  }
}

