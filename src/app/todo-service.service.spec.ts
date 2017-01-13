/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoServiceService } from './todo-service.service';
import {Todo} from './todo';

describe('TodoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoServiceService]
    });
  });

  /*it('should ...', inject([TodoServiceService], (service: TodoServiceService) => {
    expect(service).toBeTruthy();
  }));*/

   /*describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([TodoServiceService], (service: TodoServiceService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoServiceService], (service: TodoServiceService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });*/

  describe('#getAllTodos', ()=> {
  	it('should return empty', inject([TodoServiceService], (service: TodoServiceService) =>{
  		expect(service.getAllTodos()).toEqual([]);
  	}));
  	it('should return todos', inject([TodoServiceService], (service: TodoServiceService) => {
  		let todo1 = new Todo({title : "abc"});
  		let todo2 = new Todo({title : "abc"});
  		service.addTodo(todo1);
  		service.addTodo(todo2);
  		expect(service.getAllTodos()).toEqual([todo1, todo2]);
  	}));
  });
});
