import { TouchableOpacityProps, TextInputProps, ActivityIndicatorProps} from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
    title: string;
    buttonStyle?:string;
    textStyle?: string;
    loading?:boolean;
    indicator?: React.ReactElement<ActivityIndicatorProps>
}


declare interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?:string;
    inputStyle?: string;
    iconStyle?: string;
    className?:string;
    iconRight?: boolean;
    onClick?: (state: boolean) => void;
    showPassword?: boolean;
   
}