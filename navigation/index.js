import 'react-native-gesture-handler';
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';


SplashScreen.preventAutoHideAsync();

import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

// Styles
import { drawerNavStyles } from '../styles/drawer-nav/drawerNavStyles';
const drawerNavStyle = drawerNavStyles.drawer;
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    const [loaded, error] = useFonts({
        'Monterchi-Bold': require('../assets/fonts/monterchi/Fontspring-DEMO-monterchi-bold.otf'),
        'Monterchi-Italic': require('../assets/fonts/monterchi/Fontspring-DEMO-monterchi-italic.otf'),
        'Monterchi-Light': require('../assets/fonts/monterchi/Fontspring-DEMO-monterchi-light.otf'),
        'Monterchi-Regular': require('../assets/fonts/monterchi/Fontspring-DEMO-monterchi-regular.otf'),
        'Monterchi-Thin': require('../assets/fonts/monterchi/Fontspring-DEMO-monterchi-thin.otf'),
    });
     
    useEffect(() => {
    if (loaded || error) {
        SplashScreen.hideAsync();
    }
    }, [loaded, error]);
    
    if (!loaded && !error) {
    return null;
    }
    return (
        <Drawer.Navigator screenOptions = {{
            headerShown:false,
            drawerActiveTintColor:'#14142b',
            drawerActiveBackgroundColor:'#f9f9f9',
            drawerStyle:{drawerNavStyle},
        }}>
            <Drawer.Screen name = "Home" component = {HomeScreen} />
            <Drawer.Screen name = "Cart" component = {CartScreen} />
        </Drawer.Navigator>
  );
}