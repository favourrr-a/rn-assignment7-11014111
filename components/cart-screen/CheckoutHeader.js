import { View, Text } from 'react-native';

// Styles
import { checkoutHeaderStyles } from '../../styles/cart-screen/checkoutHeaderStyles';

export default function CheckoutHeader() {
    return(
        <View style = {checkoutHeaderStyles.container}>
            <Text style = {checkoutHeaderStyles.header}>
                    CHECKOUT
            </Text>
            <View style = {checkoutHeaderStyles.lineDecorContainer}>
                <View style = {checkoutHeaderStyles.lineDecor}/>
                <View style = {checkoutHeaderStyles.diamondDecor}/>
            </View>
        </View>
    )
}

