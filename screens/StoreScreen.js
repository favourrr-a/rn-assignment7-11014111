import { SafeAreaView, View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { storeScreenStyles } from '../styles/store-screen/storeScreenStyles';

export default function BlogScreen() {
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {storeScreenStyles.container}>
                <Text> Store </Text>
            </View>
        </SafeAreaView>
    )
}