
import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen name="sign-up" options={{
                headerShown: false
            }} />
            <Stack.Screen name="login" options={{
                headerShown: false
            }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    )
}