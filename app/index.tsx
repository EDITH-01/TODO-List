// index.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import AboutScreen from './About'; 
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}