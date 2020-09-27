import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode,
}
interface IState {}

const App = (props: IProps, state: IState) => {
  const { children } = props;
  return <>{children}</>;
}

export default App;
