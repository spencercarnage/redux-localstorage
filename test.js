'use strict';

var middleware = require('./');
var redux = require('redux');

describe('test', function () {
  let store;

  beforeAll(function () {
    const createStoreWithMiddleWare = redux.applyMiddleware(middleware)(redux.createStore);

    store = createStoreWithMiddleWare(function testReducer (state, action) {
      if (typeof state === 'undefined') {
        return {
          foo: 'foo',
          bar: 'bar'
        };
      }

      switch (action.type) {
        case 'SET_FOO':
          return state.foo = action.foo;
        case 'SET_BAR':
          return state.bar = action.bar;
        default:
          return state;
      }
    });  

    spyOn(window.localStorage, 'setItem');
  });

  it('is true', function () {
    store.dispatch({
      type: 'SET_FOO',
      foo: 'quz'
    });

    expect(window.localStorage.setItem)
      .toHaveBeenCalledWith('redux-state', JSON.stringify(store.getState()));
  });
});
