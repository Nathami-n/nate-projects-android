
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import Animated, { useSharedValue, useAnimatedGestureHandler, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { PanGestureHandler,GestureHandlerRootView  } from 'react-native-gesture-handler';

const cards = [
    { id: '1', text: 'Card 1' },
    { id: '2', text: 'Card 2' },
    { id: '3', text: 'Card 3' },
    // Add more cards as needed
];

export default function StackCard() {
    const [cardOrder, setCardOrder] = useState(cards); // The order of cards

    const handleSwipe = () => {
        // Rearrange the cards without removing any
        setCardOrder((prevOrder) => {
            const updatedOrder = [...prevOrder];
            const firstCard = updatedOrder.shift(); // Take the first card
            updatedOrder.push(firstCard as {id: string, text: string}); // Place it at the back
            return updatedOrder;
        });
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {cardOrder.map((card, index) => (
          <SwipeableCard
            key={card.id}
            card={card}
            index={index}
            handleSwipe={handleSwipe}
          />
        ))}
      </View>
    </GestureHandlerRootView>
    );
};



const SwipeableCard = ({ card, index, handleSwipe }: { card: { id: string, text: string }, index: number, handleSwipe: () => void }) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startX = translateX.value;
            context.startY = translateY.value;
        },
        onActive: (event, context) => {
            translateX.value = context.startX as number + event.translationX;
            translateY.value = context.startY  as number + event.translationY;
        },
        onEnd: (event) => {
            if (event.translationX > 100 || event.translationX < -100) {
                // Trigger swipe when dragged significantly
                handleSwipe();
            }
            // Animate back to original position
            translateX.value = withSpring(0);
            translateY.value = withSpring(0);
        },
    });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
        ],
    }));

    return (
        <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.card, animatedStyle, { zIndex: cards.length - index }]}>
                <Text style={styles.text}>{card.text}</Text>
            </Animated.View>
        </PanGestureHandler>
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