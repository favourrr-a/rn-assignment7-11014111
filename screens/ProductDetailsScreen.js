import { SafeAreaView, View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { productDetailsStyles } from '../styles/product-details-screen/productDetailsScreenStyles';

export default function ProductDetailsScreen({route}) {
    const { product } = route.params;
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {productDetailsStyles.container}>
                <Text> Product details </Text>
            </View>
        </SafeAreaView>
    );
}