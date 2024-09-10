import { IconButton } from "@/components";
import { useDoctorStore } from "@/zustand/doctor-store";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, useGlobalSearchParams } from "expo-router";
import { ScrollView, View, Text , Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function DoctorDescriptionPage() {
    const doc_id = useGlobalSearchParams();
    const { doctors } = useDoctorStore();

    const foundDoctor = doctors.find((doc) => doc.id === doc_id.id);

    return (
        <ScrollView style={{paddingHorizontal: 10}}>
            <SafeAreaView>
                <View className="items-center flex-1 flex-row justify-between px-2 mt-5 ">
                    <View>
                        <IconButton
                        icon={"arrow-left"}
                        color="grey"
                        size={16}

                        />
                    </View>

                    <View className="flex-row items-center gap-x-3">
                   <View className="mr-2">
                   <IconButton
                        icon={"heart-o"}
                        color="grey"
                        size={16}

                        />
                   </View>
                        <IconButton
                        icon={"share-alt"}
                        color="grey"
                        size={16}

                        />

                    </View>
                </View>

                {/* Doctor image */}
                <View>
                    <View className="flex-row">
                        <View>
                            <Image
                                src={foundDoctor?.imageUrl}
                            />
                        </View>

                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

