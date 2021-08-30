import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./Home.js"
import ConfirmPage from "./GraphDemo/ConfirmPage"
import StartInvesting from "./GraphDemo/StartInvesting"
import Button from "./GraphDemo/Button"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
        <Stack.Screen name="ConfirmPage" component={ConfirmPage}  options={{headerShown: false}} />
        <Stack.Screen name="StartInvesting" component={StartInvesting}  options={{headerShown: false}}/>
        <Stack.Screen name="Button" component={Button}  options={{headerShown: false}} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;