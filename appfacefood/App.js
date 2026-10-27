import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Cadastro from './Cadastro';
import Curiosidades from './Curiosidades';
import Dicas from './Dicas';
import Receitas from './Receitas';

// navegação entre as telas do app
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#DB0004' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Receitas" component={Receitas} />
        <Stack.Screen name="Curiosidades" component={Curiosidades} />
        <Stack.Screen name="Dicas" component={Dicas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
