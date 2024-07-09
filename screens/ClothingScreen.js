import { SafeAreaView, View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { clothingScreenStyles } from '../styles/clothing-screen/clothingScreenStyles';

export default function ClothingScreen() {
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {clothingScreenStyles.container}>
                <Text> Clothing </Text>
            </View>
        </SafeAreaView>
    )
}