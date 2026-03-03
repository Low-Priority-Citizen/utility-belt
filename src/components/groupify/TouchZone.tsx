import { View, GestureResponderEvent, StyleSheet } from "react-native";
import { Participant } from "../../types/groupify";

export default function TouchZone({
  participants,
  addParticipant,
  removeParticipant,
  updateParticipant,
}: {
  participants: Participant[];
  addParticipant: (participant: Participant) => void;
  removeParticipant: (id: string) => void;
  updateParticipant: (id: string, x: number, y: number) => void;
}) {
  const handleGrant = (event: GestureResponderEvent) => {
    event.nativeEvent.changedTouches.forEach((touch) => {
      const id = String(touch.identifier);

      const exists = participants.some((p) => p.id === id);
      if (!exists) {
        addParticipant({
          id,
          x: touch.pageX,
          y: touch.pageY,
        });
      }
    });
  };

  const handleMove = (event: GestureResponderEvent) => {
    event.nativeEvent.touches.forEach((touch) => {
      updateParticipant(String(touch.identifier), touch.pageX, touch.pageY);
    });
  };

  const handleRelease = (event: GestureResponderEvent) => {
    const touches = event.nativeEvent.changedTouches;
    touches.forEach((touch) => {
      removeParticipant(String(touch.identifier));
    });
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "#000" }}
      onStartShouldSetResponder={() => true}
      onResponderGrant={handleGrant}
      onResponderMove={handleMove}
      onResponderRelease={handleRelease}
    >
      {participants.map((p) => (
        <View
          key={p.id}
          style={[
            styles.circle,
            {
              left: p.x - 30,
              top: p.y - 200,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    position: "relative",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4f46e5",
  },
});
