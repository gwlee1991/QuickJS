import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import Root from './components/root';
import configureStore from './store/store';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    root,
  );
});
// add provider around App to provide state to all children compoenents
