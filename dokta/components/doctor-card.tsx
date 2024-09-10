import { TouchableOpacity, View, Text, Image } from "react-native"
import { Doctor } from '../zustand/doctor-store';
import { FontAwesome } from '@expo/vector-icons';
import { RouteParamInput, router } from "expo-router";


export const DoctorCard = ({ doc }: {
    doc: Doctor
}) => {

    const handleCardPress = () => {
        router.push(`/doctor/${doc.id}`);
    }
    return (
        <TouchableOpacity className="bg-white py-2 px-4 rounded-lg" onPress={handleCardPress}>
            <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row ">
                    <View className="w-[50px] h-[50px] rounded-full items-center" >
                        <Image
                            source={{
                                uri: doc.imageUrl
                            }}
                            className=" w-full mr-2 h-full rounded-full"
                            resizeMode="cover"

                        />
                    </View>
                    <View className="">
                        <Text className="font-semibold text-lg">{doc.name}</Text>
                        <Text className="text-sm text-gray-300">{doc.speciality}</Text>
                    </View>
                </View>
                <View className="flex flex-row items-center gap-x-1">
                    <FontAwesome name="star" color="orange" />
                    <Text className=" text-gray-600 mr-2">{parseFloat(doc.rating.toString()).toFixed(1)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}