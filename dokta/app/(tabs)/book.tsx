import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text} from "react-native";

export default function Book(){
    return (
        <SafeAreaView
        edges={View}
        >
            <View >
                <Text>Hello</Text>
            </View>
        </SafeAreaView>
    )
}