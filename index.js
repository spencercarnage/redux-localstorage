'use strict';

const storageMiddleware = store => next => action => {
  // TODO: figure out a way to hydrate from local storage
  //if (typeof store.getState() === 'undefined') {
  //  let state = JSON.parse(window.localStorage.get('redux-state'));

  //  if (typeof state !== 'undefined') {
  //    return state;
  //  }
  //}

  let result = next(action);

  window.localStorage.setItem('redux-state', JSON.stringify(store.getState()));

  return result;
};

module.exports = storageMiddleware;
