
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import Animated from 'react-native-reanimated';
import { GestureDetector, GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';

const cards = [
    { id: '1', text: 'Card 1' },
    { id: '2', text: 'Card 2' },
    { id: '3', text: 'Card 3' },
];

export default function StackCard() {
    const [currentCard, setCurrentCard] = useState(0);

    const handleTap = () => {
        
    };

    const gesture = Gesture.Tap().onEnd(() =>
        handleTap()
    )

    return (
        <GestureHandlerRootView style={{ flex: 1}} >
            <View className="flex-row items-center mt-2 px-2 py-2 gap-2">
            <Text className="text-lg ml-2 font-semibold ">Upcoming Schedule</Text>
            <Text>(5)</Text>
            </View>
            <View>
            <ContentCard
            card={cards[currentCard]}
            />
            <View></View>
            <View></View>
            </View>
        </GestureHandlerRootView>
    );
};

const ContentCard= ({
    card
}: {
    card: {
        id: string,
        text: string
    }
}) => {
    return (
        <View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        position: 'absolute',
        width: 300,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4FD0E9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
});