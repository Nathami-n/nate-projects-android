
import React from 'react';
import { SafeAreaView, Text, View } from "react-native";
import LottieView from 'lottie-react-native';


const LoadingScreen = () => {
    return (
        <SafeAreaView style={{
            alignItems: "center",
            justifyContent: "center",
            flex:1
        }}>
            <View style={{
                alignItems: "center"
            }}>
                <LottieView
                autoPlay={true}
                loop={true}
                source={require("../lottie/loading.json")}
                style={{width: 200, height: 200}}
                />
                <Text className='text-lg font-semibold'>Loading, please wait....</Text>
            </View>
        </SafeAreaView>
    )
}
export default LoadingScreen;