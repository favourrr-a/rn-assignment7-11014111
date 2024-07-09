import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Styles
import { cartScreenHeaderStyles } from '../../styles/cart-screen/cartScreenHeaderStyles';

// Assets
import logo from '../../assets/icons/logo-icon.png';
import search from '../../assets/icons/search-icon.png';

export default function CartScreenHeader() {
    const navigation = useNavigation();

    return(
        <View style = {cartScreenHeaderStyles.container}>
            <View style = {cartScreenHeaderStyles.emptySpaceContainer}>
                <View style = {cartScreenHeaderStyles.emptySpace}/>
            </View>
            <Image source = {logo} style = {cartScreenHeaderStyles.logo}/>
            <View style = {cartScreenHeaderStyles.iconsContainer}>
                <TouchableOpacity onPress={() => {}}>
                    <Image source = {search} style = {cartScreenHeaderStyles.search} />
                </TouchableOpacity>
            </View>
        </View>
    )
}