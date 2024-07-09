import { SafeAreaView, View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { electronicsScreenStyles } from '../styles/electronics-screen/electronicsScreenStyles';

export default function ElectronicsScreen() {
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {electronicsScreenStyles.container}>
                <Text> Electronics </Text>
            </View>
        </SafeAreaView>
    )
}