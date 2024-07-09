import 'react-native-gesture-handler';
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';


SplashScreen.preventAutoHideAsync();

import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import StoreScreen from '../screens/StoreScreen';
import LocationsScreen from '../screens/LocationsScreen';
import BlogScreen from '../screens/BlogScreen';
import JewelryScreen from '../screens/JewelryScreen';
import ElectronicsScreen from '../screens/ElectronicsScreen';
import ClothingScreen from '../screens/ClothingScreen';

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
            <Drawer.Screen name = "Store" component = {StoreScreen} />
            <Drawer.Screen name = "Locations" component = {LocationsScreen} />
            <Drawer.Screen name = "Blog" component = {BlogScreen} />
            <Drawer.Screen name = "Jewelry" component = {JewelryScreen} />
            <Drawer.Screen name = "Electronics" component = {ElectronicsScreen} />
            <Drawer.Screen name = "Clothing" component = {ClothingScreen} />
        </Drawer.Navigator>
  );
}