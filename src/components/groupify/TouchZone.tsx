import { View, GestureResponderEvent } from "react-native";
import { Participant } from "../../types/groupify";

export default function TouchZone({
  participants,
  addParticipant,
  removeParticipant,
}: {
  participants: Participant[];
  addParticipant: (participant: Participant) => void;
  removeParticipant: (id: string) => void;
}) {
  const handleGrant = (event: GestureResponderEvent) => {
    const touches = event.nativeEvent.touches;

    touches.forEach((touch) => {
      const newParticipant: Participant = {
        id: String(touch.identifier),
        x: touch.pageX,
        y: touch.pageY,
      };
      addParticipant(newParticipant);
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
      onResponderRelease={handleRelease}
    />
  );
}
