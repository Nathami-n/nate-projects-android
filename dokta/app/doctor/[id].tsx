import { IconButton } from "@/components";
import { useDoctorStore } from "@/zustand/doctor-store";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, useGlobalSearchParams } from "expo-router";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function DoctorDescriptionPage() {
    const doc_id = useGlobalSearchParams();
    const { doctors } = useDoctorStore();

    const foundDoctor = doctors.find((doc) => doc.id === doc_id.id);

    return (
        <ScrollView style={{ paddingHorizontal: 10, }}>
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
                        <View className="flex flex-row gap-x-1 items-center">
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
                        <Text className="text-sky-500 text-sm">{foundDoctor?.speciality}</Text>
                    </View>

                </View>

            </SafeAreaView>
        </ScrollView>
    )
}

