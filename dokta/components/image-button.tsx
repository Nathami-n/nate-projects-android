
import { FontAwesome } from '@expo/vector-icons';
import { View, Pressable, TouchableOpacity } from 'react-native';

const ImageButton = ({
icon, 
onClick,
color,
size,
speciality
}: {
    icon: any;
    color: string;
    onClick?: () => void;
    size: number;
    speciality: boolean
}) => {
  return (
    <Pressable onPress={onClick}>
        <TouchableOpacity >
        <View className={`rounded-full bg-white  ${speciality ? "!items-center !justify-center grid h-[58px] w-[58px]": " p-3"}`}>
        <FontAwesome name={icon} size={size} color={color}/>
        </View>
        </TouchableOpacity>
    </Pressable>
  )
}

export default ImageButton;