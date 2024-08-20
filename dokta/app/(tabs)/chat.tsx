import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat() {
    return (
        <SafeAreaView
        edges={SafeAreaView}
        >
           <View>
           <Text>Chat with doctor</Text>
           </View>
        </SafeAreaView>
    )
}