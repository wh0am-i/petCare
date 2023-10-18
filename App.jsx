import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';
import ProdutosVenda from './src/screens/ProdutosVenda';
import ProdutosVendaseg from './src/screens/ProdutosVendaseg';
import Veterinario from './src/screens/Veterinario';
import CadastraPet from './src/screens/CadastraPet';
import AdocaoPets from './src/screens/AdocaoPets';
import CarteirinhaPet from './src/screens/CarteirinhaPet';
import PaginaInicial from './src/screens/Paginainicial';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaInicial' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TelaInicial' component={PaginaInicial} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='ProdutosVenda' component={ProdutosVenda} />
        <Stack.Screen name='ProdutosVendaseg' component={ProdutosVendaseg} />
        <Stack.Screen name='Veterinario' component={Veterinario} />
        <Stack.Screen name='CadastraPet' component={CadastraPet} />
        <Stack.Screen name='AdocaoPets' component={AdocaoPets} />
        <Stack.Screen name='CarteirinhaPet' component={CarteirinhaPet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}