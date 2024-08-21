
import { Text, View, TouchableOpacity, Image } from "react-native";

export default function OAuth() {
    const handleGoogleSignIn = async () => {
    };

    return (
        <View>
            <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
                <View className="flex-1 h-[1px] bg-gray-300" />
                <Text className="text-lg">Or</Text>
                <View className="flex-1 h-[1px] bg-gray-300" />
            </View>
           <View className="items-center">
           <TouchableOpacity className="flex w-full flex-row items-center p-1 border rounded-full  border-gray-300 justify-center">
                <View>
                    <Image
                        source={require("../assets/icons/google.png")}
                        resizeMode="contain"
                        className="w-6"
                    />
                </View>
                <Text className="text-md ml-3">Continue with Google</Text>
            </TouchableOpacity>
           </View>
        </View>
    );
};

