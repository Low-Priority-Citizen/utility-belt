import { useState } from "react";
import { Participant } from "../types/groupify";
import { GroupifyMode } from "../types/groupifyMode";

export default function useGroupify() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  const [mode, setMode] = useState<GroupifyMode>("split-2");

  const addParticipant = (participant: Participant) => {
    setParticipants((prev) => [...prev, participant]);
  };

  const reset = () => {
    setParticipants([]);
  };

  // const result =useMemo(() => {
    ///TODO
  // })
  return {
    participants,
    addParticipant,
    reset,
  };
}
