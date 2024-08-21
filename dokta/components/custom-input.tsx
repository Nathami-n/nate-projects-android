import { InputFieldProps } from "@/types/types";
import { KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Keyboard, Platform, View, Text, Image } from "react-native";

export default function InputField({
    label,
    icon,
    secureTextEntry = false,
    labelStyle,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props
}: InputFieldProps) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="my-2 w-full">
                    <Text className={`text-lg mb-3 ${labelStyle}`}> {label}</Text>
                </View>
                <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border-neutral-100 focus:border-green-500 ${containerStyle}`}>
                    {icon && (<Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />)}
                    <TextInput 
                    className={`rounded-full p-4 text-[15px] flex-1 ${inputStyle} text-left`}
                    secureTextEntry={secureTextEntry}
                    {...props}
                     />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}