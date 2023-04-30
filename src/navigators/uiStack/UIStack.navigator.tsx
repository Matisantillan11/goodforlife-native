import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonScreen } from '@screens/ui/index';
const Stack = createNativeStackNavigator();

export const UIStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Buttons" component={ButtonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
