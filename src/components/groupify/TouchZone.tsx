import { View, GestureResponderEvent, StyleSheet } from "react-native";
import { Participant } from "../../types/groupify";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

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
  const gesture = Gesture.Pan()
    .onTouchesDown((event) => {
      event.changedTouches.forEach((touch) => {
        const id = String(touch.id);
        addParticipant({
          id,
          x: touch.x,
          y: touch.y,
        });
      });
    })
    .onTouchesMove((event) => {
      event.allTouches.forEach((touch) => {
        updateParticipant(String(touch.id), touch.x, touch.y);
      });
    })
    .onTouchesUp((event) => {
      event.changedTouches.forEach((touch) => {
        removeParticipant(String(touch.id));
      });
    })
    .maxPointers(10);

  return (
    <GestureDetector gesture={gesture}>
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        {participants.map((p) => (
          <View
            key={p.id}
            style={[
              {
                position: "absolute",
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "#4f46e5",
                left: p.x - 30,
                top: p.y - 30,
              },
            ]}
          />
        ))}
      </View>
    </GestureDetector>
  );
}
