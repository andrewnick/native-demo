import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Next from './screens/Next';

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Next: {
      screen: Next,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const App = () => {
  return (
    <RootNavigator />
  );
};

export default App;


