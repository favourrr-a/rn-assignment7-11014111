import { SafeAreaView, View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { locationsScreenStyles } from '../styles/locations-screen/locationsScreenStyles';

export default function BlogScreen() {
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {locationsScreenStyles.container}>
                <Text> Locations </Text>
            </View>
        </SafeAreaView>
    )
}