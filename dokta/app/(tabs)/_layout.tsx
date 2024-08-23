import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function HomeLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
                headerTransparent: true,
                headerTitle: "",
                title: "Home",
                tabBarLabelStyle: {
                    fontSize: 12
                }

            }} />
            <Tabs.Screen name="book" options={{
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="calendar" color={color} />,
                headerTitle: "Book a doctor",
                title: "Book",
                tabBarLabelStyle: {
                    fontSize: 12
                }
            }} />
            <Tabs.Screen name="chat" options={{
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="telegram" color={color} />,
                tabBarLabelStyle: {
                    fontSize: 12,
                }
            }} />
            <Tabs.Screen name="settings" options={{
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="gear" color={color} />,
                tabBarLabelStyle: {
                    fontSize: 12
                },
                headerTitle: "Settings",
                title: "Settings"
            }} />
        </Tabs>
    )
}