import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Receitas from './Receitas';

// navegação entre as telas do app
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Receitas"
        screenOptions={{
          headerStyle: { backgroundColor: '#DB0004' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Receitas" component={Receitas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
