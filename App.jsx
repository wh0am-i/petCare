import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/pages/Inicio';
import Detalhes from './src/pages/ParteUm';
import ParteUm from './src/pages/ParteUm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Inicio} options={{ title: 'Overview' }} />
        <Stack.Screen name="ParteUm" component={ParteUm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

