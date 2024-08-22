
import { Link, router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, ScrollView, StatusBar, Text, View } from "react-native";
import { handleFirstTimeSignUp } from '../../utils/actions';
import Toast from 'react-native-root-toast';

import { CustomButton, InputField, OAuth } from "@/components";

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSignUpPress = async () => {
        setLoading(true);
        const response = await handleFirstTimeSignUp(form.email, form.password, form.name);
        if (response.data === null) {
             Toast.show(`${response.error.message}`);
             setLoading(false);
             return;
        }
        setForm({ name: "", email: "", password: "" });
        setLoading(false)
        router.push("/login");
        Toast.show(`${response.data.user.displayName}, now proceed to login`);
    }
    const handleShowPassword = (state: boolean) => {
        setShowPassword(!state)
    }

    return (
        <ScrollView className="flex-1 bg-white" contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
            <View >
                <View className="w-full ">
                    <Text className="text-xl text-center text-black">
                        Sign Up to <Text className="text-blue text-xl">Dokta</Text><Text className="text-rose-500">.</Text>
                    </Text>
                </View>
                <View className="p-5 ">
                    <View className="mb-4">
                        <InputField
                            label="Name"
                            icon={require("../../assets/icons/person.png")}
                            placeholder="john doe"
                            value={form.name}
                            onChangeText={(value) => setForm((prev) => ({ ...prev, name: value }))}
                        />
                    </View>
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
                        title="Sign Up"
                        onPress={onSignUpPress}
                        buttonStyle="mt-5 bg-blue"
                        textStyle="text-white"
                        indicator={<ActivityIndicator color="white"/>}
                        loading={loading}
                    />
                    <OAuth />
                    <Link
                        href="/login"
                        className="text-md text-center mt-4"
                    >
                        Already have an account?{" "}
                        <Text className="text-blue underline">Log in</Text>
                    </Link>
                </View>
            </View>

            <StatusBar barStyle="dark-content"
                translucent={true}
                backgroundColor="transparent" />
        </ScrollView>
    );
}

export default SignUp;