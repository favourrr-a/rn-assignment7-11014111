import { SafeAreaView, View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { jewelryScreenStyles } from '../styles/jewelry-screen/jewelryScreenStyles';

export default function JewelryScreen() {
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {jewelryScreenStyles.container}>
                <Text> Jewelry </Text>
            </View>
        </SafeAreaView>
    )
}