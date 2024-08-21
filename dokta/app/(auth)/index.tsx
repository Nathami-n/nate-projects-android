import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingScreen() {
    return (
        <SafeAreaView>
            <View>
                <Text>
                    Hello
                </Text>
            </View>
            <StatusBar backgroundColor={"#333"} networkActivityIndicatorVisible />
        </SafeAreaView>
    )
}