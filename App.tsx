import React from 'react';
import { StyleSheet } from 'react-native';
import { UIStackNavigator } from './src/navigators/uiStack/UIStack.navigator';

export default function App() {
  return (
    <UIStackNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
