
import { FontAwesome } from '@expo/vector-icons';
import { View, Pressable } from 'react-native';

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
        <View className={`rounded-full bg-white p-2 ${speciality ? "!items-center !justify-center grid h-[58px] w-[58px]": ""}`}>
        <FontAwesome name={icon} size={size} color={color}/>
        </View>
    </Pressable>
  )
}

export default ImageButton;