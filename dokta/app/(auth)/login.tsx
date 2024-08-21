
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";

import { CustomButton, InputField, OAuth } from "@/components";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (state: boolean) => {
        setShowPassword(!state)
    }

    const onLoginPress = () => {
        
    }

    return (
        <ScrollView className="flex-1 bg-white" contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
            <View >
                <View className="w-full ">
                    <Text className="text-xl text-center text-black">
                        Login to <Text className="text-blue">Dokta</Text><Text className="text-rose-500">.</Text>
                    </Text>
                </View>
                <View className="p-5 ">
                    <View className="mb-4">
                        <InputField
                            label="Email"
                            icon={require("../../assets/icons/email.png")}
                            placeholder="test@gmail.com"
                            value={form.email}
                            onChangeText={(value) => setForm((prev) => ({ ...prev, email: value }))}
                        />
                    </View>
                    <View className="">
                        <InputField
                            label="Password"
                            icon={require("../../assets/icons/lock.png")}
                            secureTextEntry={showPassword ? false : true}
                            placeholder="***"
                            iconRight
                            containerStyle="pr-3"
                            showPassword={showPassword}
                            onClick={handleShowPassword}
                            onChangeText={(value) => setForm((prev) => ({ ...prev, password: value }))}
                        />
                    </View>
                    <CustomButton
                        title="Login"
                        onPress={onLoginPress}
                        buttonStyle="mt-5 bg-blue"
                        textStyle="text-white"
                    />
                    <OAuth />
                    <Link
                        href="/sign-up"
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