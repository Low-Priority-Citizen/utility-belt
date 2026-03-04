import { View } from "react-native";
import { Participant } from "../../types/groupify";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Bubble from "../../components/groupify/Bubble";
import { useRef } from "react";

interface Props {
  participants: Participant[];
  addParticipant: (p: Participant) => void;
  updateParticipant: (id: string, x: number, y: number) => void;
  removeParticipant: (id: string) => void;
}

export default function TouchZone({
  participants,
  addParticipant,
  updateParticipant,
  removeParticipant,
}: Props) {
  const activeTouches = useRef<Map<number, string>>(new Map());

  const gesture = Gesture.Pan()
    .minPointers(1)
    .maxPointers(10)
    .onTouchesDown((event) => {
      event.changedTouches.forEach((touch) => {
        if (participants.find((p) => p.id.startsWith(String(touch.id)))) return;
        const fingerId = touch.id;
        const participantId = `p-${fingerId}-${Date.now()}`;
        activeTouches.current.set(fingerId, participantId);
        console.log("touch down", touch);
        addParticipant({
          id: participantId,
          x: touch.absoluteX,
          y: touch.absoluteY,
        });
      });
    })
    .onTouchesMove((event) => {
      event.allTouches.forEach((touch) => {
        const fingerId = touch.id;
        const participantId = activeTouches.current.get(fingerId);

        if (!participantId) return;

        updateParticipant(participantId, touch.absoluteX, touch.absoluteY);
      });
    })
    .onTouchesUp((event) => {
      event.changedTouches.forEach((touch) => {
        const fingerId = touch.id;
        const participantId = activeTouches.current.get(fingerId);
        if (!participantId) return;
        removeParticipant(participantId);
        activeTouches.current.delete(fingerId);
      });
    });
  return (
    <GestureDetector gesture={gesture}>
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        {participants.map((p) => (
          <Bubble key={p.id} participant={p} />
        ))}
      </View>
    </GestureDetector>
  );
}
