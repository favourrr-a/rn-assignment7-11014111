import { SafeAreaView, View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { blogScreenStyles } from '../styles/blog-screen/blogScreenStyles';

export default function BlogScreen() {
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {blogScreenStyles.container}>
                <Text> Blog </Text>
            </View>
        </SafeAreaView>
    )
}