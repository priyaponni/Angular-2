import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept value to constructor', () => {
  	let todo = new Todo({title : "abc", "complete" : true});
  	expect(todo.title).toEqual('abc');
  	expect(todo.complete).toEqual(true);
  	expect(todo.id).not.toBeNull();
  })
});
