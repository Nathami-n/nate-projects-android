import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, StatusBar, View,  } from 'react-native';

export default function TestPage() {
    return (
        <SafeAreaView 
        className="bg-bg flex-1"
        >
            <View>
                {/* welcome */}
                <View>
                    <Text className="font-semibold text-xl">Hello Nathan</Text>
                    <Text></Text>
                </View>
                {/* icon */}
                
            </View>
            <StatusBar networkActivityIndicatorVisible translucent backgroundColor={"#333"} />
        </SafeAreaView>
    )
}


