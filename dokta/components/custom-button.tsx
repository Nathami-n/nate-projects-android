import { ButtonProps } from "@/types/types";
import { Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({
    onPress,
    title,
    loading,
    indicator,
    buttonStyle,
    textStyle,
    ...props
}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`w-full rounded-full p-3 flex flex-row justify-center items-center  shadow-md shadow-neutral-400/70 ${buttonStyle}`}
        >
            {loading ? ( indicator) : (<View><Text className={`text-lg font-bold ${textStyle}`}>{title}</Text></View>)}
        </TouchableOpacity>
    )
}

export default CustomButton