import React from 'react';
import { ThemeProvider } from './src/context/Theme/ThemeContext';
import { TabNavigator } from './src/navigation/TabNavigator/TabNavigator';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const App = () => {
  return (
    <AppState>
      <TabNavigator />
    </AppState>
  );
};

const AppState = ({ children }: IProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
