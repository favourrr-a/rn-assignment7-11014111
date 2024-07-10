import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation, DrawerActions } from '@react-navigation/native';

// Styles
import { drawerStyles } from '../../styles/drawer-nav/customDrawerStyles';

// Assets
import close from '../../assets/icons/close-icon.png';

export default function CustomDrawerContent(props) {
    const navigation = useNavigation();
    const closeDrawer = () => {
        navigation.dispatch(DrawerActions.closeDrawer());
    }
    return (
        <DrawerContentScrollView {...props}>
            <View style = {drawerStyles.headerContainer}>
                <TouchableOpacity style = {drawerStyles.closeButtonContainer} onPress = {closeDrawer}>
                    <Image source = {close} style = {drawerStyles.closeButton}/>
                </TouchableOpacity>
                <View style = {drawerStyles.userNameContainer}>
                    <Text style = {drawerStyles.userName}> ERIC ATSU </Text>
                </View>
                <View style = {drawerStyles.underline}/>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}