import { TouchableOpacity, View, Text, Image } from "react-native"
import { Doctor } from '../zustand/doctor-store';
import { FontAwesome } from '@expo/vector-icons';
import { RouteParamInput, router } from "expo-router";
import { IconButton } from ".";


export const DoctorCard = ({ doc }: {
    doc: Doctor
}) => {

    const handleCardPress = () => {
        router.push(`/doctor/${doc.id}`);
    }
    return (
        <TouchableOpacity className="bg-white py-4 px-4 rounded-lg" onPress={handleCardPress}>
            <View className="flex flex-row justify-between relative items-center">
                <View className="flex flex-row gap-x-2">
                    <View className="w-[72px] h-[72px] rounded-full items-center" >
                        <Image
                            source={{
                                uri: doc.imageUrl
                            }}
                            className=" w-full mr-2 h-full rounded-tl-lg rounded-br-lg rounded-tr-md rounded-bl-md"
                            resizeMode="cover"

                        />
                    </View>
                    <View className="w-full flex-1 ">
                        <View className="flex flex-row items-center justify-between">
                            <Text className="font-semibold text-lg">{doc.name}</Text>
                            <View className="">
                                <IconButton
                                    size={20}
                                    icon={"heart-o"}
                                    color="blue" />
                            </View>
                        </View>
                        <Text className="text-md text-gray-500 -mt-2 mb-1">{doc.speciality}</Text>
                        <View className="flex flex-row items-center justify-between">
                            <View className="flex-row gap-x-1 items-center">
                                <FontAwesome name="star" color={"orange"}/>
                                <Text>{parseFloat(doc.rating.toString()).toFixed(1)}</Text>
                            </View>

                            <Text className=" text-sm">Ksh{doc.price}/hr</Text>
                        </View>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}