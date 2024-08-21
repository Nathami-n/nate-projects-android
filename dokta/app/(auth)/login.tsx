
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";

import { CustomButton, InputField, OAuth } from "@/components";

export default function Login () {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onSignUpPress = () => {

    }

    return (
        <ScrollView className="flex-1 bg-white" contentContainerStyle={{ justifyContent: "center" }}>
            <View className="flex-1">
                <View className="w-full ">
                    <Text className="text-xl text-center text-black">
                        SignUp to <Text className="text-blue">Dokta</Text><Text className="text-rose-500">.</Text>
                    </Text>
                </View>
                <View className="p-5 ">
                    <View className="mb-4">
                        <InputField
                            label="Email"
                            icon={require("../../assets/icons/email.png")}
                        />
                    </View>
                    <View className="">
                        <InputField
                            label="Password"
                            icon={require("../../assets/icons/lock.png")}
                            secureTextEntry={true}
                        />
                    </View>
                    <CustomButton
                        title="Sign Up"
                        onPress={onSignUpPress}
                        buttonStyle="mt-5 bg-blue"
                        textStyle="text-white"
                    />
                    <OAuth />
                    <Link
                        href="/login"
                        className="text-md text-center mt-4"
                    >
                        Have no  account?{" "}
                        <Text className="text-blue underline">Create one</Text>
                    </Link>
                </View>
            </View>

            <StatusBar barStyle="dark-content"
                translucent={true}
                backgroundColor="transparent" />
        </ScrollView>
    );
}