import { View, Text, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { useState, useRef, useEffect } from 'react';
import { doctorsOnboarding } from '@/utils/data';
import { CustomButton } from '@/components';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<Swiper>(null);

    useEffect(() => {
        const checkOnboardingStatus = async () => {
            const isOnboarded = await AsyncStorage.getItem('isOnboarded');
            if (!isOnboarded) {
              router.replace('/(auth)/sign-up');
            }
        };
        checkOnboardingStatus();
      }, []);
    const handleContinue = async () => {
        await AsyncStorage.setItem("isOnboarded", "true");
        router.replace("/(auth)/sign-up")
    }
    return (
        <SafeAreaView className='flex-1'>
            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View className='w-[32px] h-[4px] mx-1 bg-gray-300 rounded-full' />}
                activeDot={
                    <View className="w-[32px] h-[4px] mx-1 bg-blue rounded-full" />
                }
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {doctorsOnboarding.map((item) => (
                    <View key={item.id} className="flex items-center justify-center p-5 mt-2">
                        <Image
                            source={item.imageHref}
                            className="w-full h-[300px]"
                            resizeMode="contain"
                        />
                        <Text className="text-md font-semibold text-center  mx-10 mt-3">
                            {item.description}
                        </Text>
                    </View>
                ))}
            </Swiper>
            <CustomButton
                title={activeIndex === doctorsOnboarding.length - 1 ? "Continue" : "Next"}
                buttonStyle="bg-blue mb-5 !w-11/12 mx-auto"
                textStyle='text-white'
                onPress={activeIndex === doctorsOnboarding.length - 1 ? handleContinue : () => (swiperRef.current?.scrollBy(1))}
            />
            <StatusBar backgroundColor={"#333"} networkActivityIndicatorVisible />
        </SafeAreaView>
    )
}