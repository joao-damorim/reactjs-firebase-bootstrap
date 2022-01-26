import React from 'react';
import AppRoute from './routes';
import store from '../src/store/';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppRoute/>
    </Provider>
  );
}


