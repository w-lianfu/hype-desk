import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';

import { Store } from '../store';
import AppRoute from './app-route';

interface IProps {
  store: Store;
  history: History;
}
interface IState {}

const Root = ({ store, history }: IProps, state: IState) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRoute />
    </ConnectedRouter>
  </Provider>
);

export default hot(Root);
