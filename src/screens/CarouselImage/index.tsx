import React, { useRef } from "react";
import { Dimensions, View, Image, Animated } from "react-native";

import { Container, DotIndicator, Dot } from "./styled";

interface HeaderProps {
  data: { uri: string }[];
}

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width;
// const ITEM_HEIGTH = height * 0.75;

export const CarouselImage: React.FC<HeaderProps> = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <Animated.FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1 }}>
              <Image
                source={item}
                style={{
                  resizeMode: "center",
                  height: "100%",
                  width: ITEM_WIDTH,
                }}
              />
            </View>
          );
        }}
      />

      <DotIndicator>
        {data.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 8,
              marginLeft: 8,
              backgroundColor: "#333",
            }}
          ></View>
        ))}

        <Animated.View
          style={[
            {
              width: 16,
              height: 16,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#333",
              position: "absolute",
              top: -4,
              left: +4,
            },
            {
              transform: [
                {
                  translateX: Animated.divide(scrollX, ITEM_WIDTH).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 16],
                  }),
                },
              ],
            },
          ]}
        />
      </DotIndicator>
    </Container>
  );
};
