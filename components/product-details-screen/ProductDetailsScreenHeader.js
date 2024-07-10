import { View, Image, TouchableOpacity } from 'react-native';

// Styles
import { headerStyles } from '../../styles/home-screen/headerStyles';

// Assets
import menu from '../../assets/icons/menu-icon.png';
import logo from '../../assets/icons/logo-icon.png';
import search from '../../assets/icons/search-icon.png';
import shoppingBag from '../../assets/icons/shopping-bag-icon.png';

export default function ProductDetailsScreenHeader({openDrawer}) {
    return(
        <View style = {headerStyles.container}>
            <TouchableOpacity style = {headerStyles.menuContainer} onPress = {openDrawer}>
                <Image source = {menu} style = {headerStyles.menu}/>
            </TouchableOpacity>
            <Image source = {logo} style = {headerStyles.logo}/>
            <View style = {headerStyles.iconsContainer}>
                <TouchableOpacity onPress={() => {}}>
                    <Image source = {search} style = {headerStyles.search} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Cart')}}>
                <Image source = {shoppingBag} style = {headerStyles.shoppingBag}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}