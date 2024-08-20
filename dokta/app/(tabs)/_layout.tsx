import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function HomeLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>,
                headerShown: false,
            }}/>
            <Tabs.Screen name="book" options={{
                tabBarIcon: ({color}) => <FontAwesome size={28} name="calendar" color={color}/>, 
                headerTitle: "Book a doctor",
                title: "Book"
            }}/>
            <Tabs.Screen name="chat" options={{
                tabBarIcon: ({color}) => <FontAwesome size={28} name="telegram" color={color}/>
            }} />
            <Tabs.Screen name="settings" options={{
                tabBarIcon: ({color}) => <FontAwesome size={28} name="gears" color={color}/>, 
                headerTitle: "Settings",
                title: "Settings"
            }}/>
        </Tabs>
    )
}