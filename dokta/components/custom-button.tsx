import { ButtonProps } from "@/types/types";
import { Text, TouchableOpacity } from "react-native";


const CustomButton = ({
    onPress,
    title,
    buttonStyle,
    textStyle,
    ...props
}: ButtonProps)  => {
    return (
        <TouchableOpacity
        onPress={onPress}
        className={`w-full rounded-full p-3 flex flex-row justify-center items-center  shadow-md shadow-neutral-400/70 ${buttonStyle}`}
        >
            <Text className={`text-lg font-bold ${textStyle}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton