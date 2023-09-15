import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/pages/Inicio';
import ParteUm from './src/pages/ParteUm';
import ParteDois from './src/pages/ParteDois';
import ParteTres from './src/pages/ParteTres';
import ParteQuatro from './src/pages/ParteQuatro';
import ParteCinco from './src/pages/ParteCinco';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Inicio} options={{ title: 'Bem vindo!!11!' }} />
        <Stack.Screen name="ParteUm" component={ParteUm}/>
        <Stack.Screen name="ParteDois" component={ParteDois}/>
        <Stack.Screen name="ParteTres" component={ParteTres}/>
        <Stack.Screen name="ParteQuatro" component={ParteQuatro}/>
        <Stack.Screen name="ParteCinco" component={ParteCinco}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

