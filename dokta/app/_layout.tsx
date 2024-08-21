import { Stack } from 'expo-router';
import { RootSiblingParent } from 'react-native-root-siblings';
export default function Layout() {
    return (
        <RootSiblingParent>
            <Stack >
                <Stack.Screen name="(tabs)" options={{
                    headerShown: false
                }} />
                <Stack.Screen name="(auth)" options={{
                    headerShown: false
                }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </RootSiblingParent>
    )
}