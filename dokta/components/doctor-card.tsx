import { TouchableOpacity, View, Text, Image } from "react-native"
import { Doctor } from '../zustand/doctor-store';
import { FontAwesome } from '@expo/vector-icons';


export const DoctorCard = ({ doc }: {
    doc: Doctor
}) => {
    return (
        <TouchableOpacity className="bg-white p-2 rounded-lg">
            <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row ">
                    <View className="w-[80px]" >
                        <Image
                            source={{
                                uri: doc.imageUrl
                            }}
                            className=" w-full h-full !rounded-lg"
                            resizeMode="contain"
                        />
                    </View>
                    <View className="">
                        <Text className="font-semibold text-lg">{doc.name}</Text>
                        <Text className="text-sm text-gray-300">{doc.speciality}</Text>
                    </View>
                </View>
                <View className="flex flex-row items-center gap-x-1">
                    <FontAwesome name="star" color="orange" />
                    <Text className=" text-gray-500 mr-2">{doc.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}