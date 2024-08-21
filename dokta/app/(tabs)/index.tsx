import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StatusBar, View, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { IconButton } from "@/components";
import { doctorSpecialties } from "@/utils/data";

export default function TestPage() {
    const handleNotification = () => {

    }
    const image = require("../../assets/images/hero.png")
    return (
        <SafeAreaView
            className="bg-bg flex-1 px-1"
        >
            <ScrollView>
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

            <View className="bg-blue rounded-md px-2 py-7 mt-8 flex-row ">
                {/* text */}
                <View className="flex-1">
                    <Text className='font-bold text-white text-xl'>Special Offer</Text>
                    <Text className="text-white text-md">Get a 40% off with the first video consultation</Text>
                    <TouchableOpacity className=" p-2 rounded-xl bg-gray-300 w-1/2 items-center mt-2">
                        <Text className="text-white font-bold">Book now</Text>
                    </TouchableOpacity>
                </View>
                {/* image */}
                <View className=" w-40">
                    <Image
                        source={image}
                        resizeMode="cover"
                        className=" h-full w-full flex-1"
                    />
                </View>
            </View>

            <View className="mt-4">
                <View className="flex-row justify-between px-2">
                    <Text className="text-lg font-semibold">Departments</Text>
                    <TouchableOpacity>
                        <Text className="text-blue">See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={doctorSpecialties}
                    showsHorizontalScrollIndicator
                    contentContainerStyle={{
                        padding: 16
                    }}
                    horizontal
                    renderItem={({ item }) => (
                        <View className="mx-2 items-center">
                            <IconButton
                                icon={item.icon}
                                size={24}
                                color="#4d65d3"
                                speciality
                            />
                            <Text className="text-gray-500 text-xs mt-2">{item.name}</Text>
                        </View>
                    )}
                />
            </View>
            {/* consultants */}

            <View>
                <View className="flex-row justify-between px-1">
                    <Text className="font-semibold">Consultants</Text>
                    <TouchableOpacity>
                        <Text className="text-blue">See all</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            <StatusBar
                backgroundColor={"#333"}
                networkActivityIndicatorVisible
                barStyle={"default"} />
        </SafeAreaView>
    )
}


