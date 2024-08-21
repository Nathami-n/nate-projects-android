import { InputFieldProps } from "@/types/types";
import { FontAwesome } from '@expo/vector-icons';
import { KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Keyboard, Platform, View, Text, Image, TouchableOpacity } from "react-native";

export default function InputField({
    label,
    icon,
    secureTextEntry = false,
    labelStyle,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    iconRight,
    onClick,
    showPassword,
    ...props
}: InputFieldProps) {
    const _Click = onClick as (state: boolean) => void;
    const _pass = showPassword as boolean;
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <View>
                <View className=" w-full">
                    <Text className={`text-md mb-1 ${labelStyle}`}> {label}</Text>
                </View>
                <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border-neutral-100 focus:border-green-500 ${containerStyle}`}>
                    {icon && (<Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />)}
                    <TextInput
                        className={`rounded-full p-2 text-[15px] flex-1 ${inputStyle} text-left`}
                        secureTextEntry={secureTextEntry}
                        {...props}
                    />
                    {iconRight && (showPassword ? <TouchableOpacity onPress={() => _Click(_pass)}>
                        <FontAwesome name="eye" size={20} color="gray" className="mr-" />
                    </TouchableOpacity> : <TouchableOpacity onPress={() => _Click(_pass)
                    }>
                        <FontAwesome name="eye-slash" size={20} color="gray" />
                    </TouchableOpacity>)}
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}