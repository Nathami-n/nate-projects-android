import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, StatusBar, View, TextInput, FlatList, } from 'react-native';
import { IconButton, StackCard} from "@/components";
import { doctorSpecialties } from "@/utils/data";

export default function TestPage() {
    const handleNotification = () => {

    }
    return (
        <SafeAreaView
            className="bg-bg flex-1"
        >
            <View className="flex-row items-center justify-between px-4 mt-4">
                {/* welcome */}
                <View>
                    <Text className="font-semibold text-xl">Hello Nathan</Text>
                    <Text className="text-gray-500">Good Morning</Text>
                </View>
                {/* icon */}
                <View>
                    <IconButton
                        icon={"bell-o"}
                        color="black"
                        size={15}
                        onClick={handleNotification}
                    />
                </View>
            </View>
            <View className="px-3">
                <View className="bg-white rounded-2xl flex-row px-2 py-1 justify-between mt-8">
                    <IconButton
                        icon={"search"}
                        color="grey"
                        size={20}
                    />
                    <TextInput
                    placeholder="Search"
                    className="text-start flex-1"
                     />
                    <IconButton
                        icon="sliders"
                        color="#3F00FF"
                        size={20}
                    />
                </View>
            </View>
            <View className="mt-4">
            <FlatList
                data={doctorSpecialties}
                showsHorizontalScrollIndicator
                contentContainerStyle={{
                    padding: 16
                }}
                horizontal
                renderItem={({item}) => (
                    <View className="mx-2 items-center">
                        <IconButton
                        icon={item.icon}
                        size={24}
                        color="#3f00ff"
                        speciality
                        />
                        <Text className="text-gray-500 text-xs mt-2">{item.name}</Text>
                    </View>
                )}
                />
            </View>
            <StackCard/>
            <StatusBar 
            backgroundColor={"#333"}
            networkActivityIndicatorVisible 
            barStyle={"default"} />
        </SafeAreaView>
    )
}


