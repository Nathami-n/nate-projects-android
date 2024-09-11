import { IconButton } from "@/components";
import { useDoctorStore } from "@/zustand/doctor-store";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, useGlobalSearchParams } from "expo-router";
import { ScrollView, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function DoctorDescriptionPage() {
    const doc_id = useGlobalSearchParams();
    const { doctors } = useDoctorStore();

    const foundDoctor = doctors.find((doc) => doc.id === doc_id.id);

    return (
        <ScrollView style={{ paddingHorizontal: 10 }}>
            <SafeAreaView className="px-3">
                <View className="items-center flex-1 flex-row justify-between px-2 mt-5 ">
                    <View>
                        <IconButton
                            icon={"arrow-left"}
                            color="grey"
                            size={16}

                        />
                    </View>

                    <View className="flex-row items-center gap-x-3">
                        <View className="mr-2">
                            <IconButton
                                icon={"heart-o"}
                                color="grey"
                                size={16}

                            />
                        </View>
                        <IconButton
                            icon={"share-alt"}
                            color="grey"
                            size={16}

                        />

                    </View>
                </View>
                <View className="flex-row flex-1 mt-10 gap-x-3">
                    <View className="rounded-lg">
                        <Image
                        src={foundDoctor?.imageUrl}
                        className="w-[100px] h-[100px] rounded-lg"
                        resizeMode="cover"
                        />
                    </View>

                    <View className="flex-1">
                        <View className="flex flex-row gap-x-1  justify-between items-center">
                            <Text className="font-semibold text-lg">{foundDoctor?.name}</Text>
                            <View className="flex items-center flex-row gap-x-2">
                                <TouchableOpacity className="rounded-full p-2 bg-white flex items-center justify-center flex-row ">
                                    <FontAwesome name="commenting-o" size={16} color={"grey"}/>
                                </TouchableOpacity>
                                <TouchableOpacity className="rounded-full p-2 bg-white flex items-center flex-row justify-center ">
                                    <FontAwesome name="phone" size={16} color={"grey"}/>
                                </TouchableOpacity>
                                <TouchableOpacity className="rounded-full p-2 bg-white ">
                                    <FontAwesome name="video-camera" size={16} color={"grey"}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text className="text-blue text-sm">{foundDoctor?.speciality}</Text>

                        <View className="mt-5 flex flex-row items-center justify-between">
                            <Text className="font-semibold text-md">Rates/hr</Text>
                            <Text className="text-sm">KSH{foundDoctor?.price.toLocaleString()}</Text>
                        </View>
                    </View>

                

                </View>

                {/* description */}
                <View className="flex-1 mt-10 ">
                    <Text className="font-semibold text-lg">Description</Text>
                    <Text className="text-gray-500 text-xs">
                        {foundDoctor?.statement}
                    </Text>
                </View>

                {/* working hours */}
                <View className="mt-10">
                    <View className="flex flex-row justify-between items-center">
                        <Text className="text-lg font-semibold">Working Hours</Text>
                        <TouchableOpacity >
                            <Text className="text-blue">See all</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                    data={["10:00AM", "10:30AM", "12:00PM", "12:30PM", "3:00PM", "3:30PM"]}
                    horizontal
                    contentContainerStyle ={{
                        padding:16
                    }}
                    keyExtractor={(data) => data}
                    renderItem={({item, index}) => (
                        <View className={`rounded-lg p-4 ${index === 1 ? "!bg-blue text-white" : " bg-white"}  mr-2 mt-2`}>
                        <Text className={`${index === 1 ? "text-white" :''}`}>{item}</Text>
                        </View>
                    )}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

