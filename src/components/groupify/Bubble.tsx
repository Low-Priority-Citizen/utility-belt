import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import { useEffect } from "react";
import { Participant } from "../../types/groupify";

const colors = ["#ff4d4d", "#4dff88", "#4da6ff", "#ffd24d"];

export default function Bubble({ participant }: { participant: Participant }) {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(1, {
      damping: 12,
      stiffness: 120,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const color =
    participant.team !== undefined ? colors[participant.team] : "#777";

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: color,
          left: participant.x - 30,
          top: participant.y - 30,
        },
        animatedStyle,
      ]}
    />
  );
}
