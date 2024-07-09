import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { CartContextProvider } from './contexts/cartContext';
import DrawerNav from './navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style = "dark"/>
      <CartContextProvider>
        <DrawerNav/>
      </CartContextProvider>
    </NavigationContainer>
  );
}