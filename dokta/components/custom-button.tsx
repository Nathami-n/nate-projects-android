import { ButtonProps } from "@/types/types";
import { Text, TouchableOpacity } from "react-native";


const CustomButton = ({
    onPress,
    title,
    className,
    ...props
}: ButtonProps)  => {
    return (
        <TouchableOpacity
        onPress={onPress}
        className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${className}`}
        >
            <Text className={`text-lg font-bold`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton