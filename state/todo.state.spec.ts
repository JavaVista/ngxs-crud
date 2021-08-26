import { TestBed, async, waitForAsync } from '@angular/core/testing';
import { NgxsModule, StateContext, Store } from '@ngxs/store';
import { TodoState, TodoStateModel } from './todo.state';
import { AddTodo } from './todo.actions';

describe('Todo actions', () => {
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([TodoState])]
    }).compileComponents();
    store = TestBed.inject(Store);
  }));

  it('should create an action and add an item', () => {
    store.dispatch(new AddTodo({userId: 1, id: 101, title: 'item-1', completed: true}));
    store.select(state => state.todo.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining([ 'item-1' ]));
    });
  });

});
