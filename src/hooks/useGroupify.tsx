import { useMemo, useState } from "react";
import { Participant } from "../types/groupify";
import { GroupifyMode } from "../types/groupifyMode";
import { selectRandomParticipants } from "../lib/algorithms/selectRandom";
import { splitIntoGroups } from "../lib/algorithms/splitIntoGroups";

export default function useGroupify() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  const [mode, setMode] = useState<GroupifyMode>("split-2");

  const addParticipant = (participant: Participant) => {
    setParticipants((prev) => [...prev, participant]);
  };

  const removeParticipant = (id: string) => {
    setParticipants((prev) => prev.filter((p) => p.id !== id));
  };

  const reset = () => {
    setParticipants([]);
  };

  const result = useMemo(() => {
    if (mode.startsWith("Random")) {
      const count = Number(mode.split("-")[1]);
      return selectRandomParticipants(participants, count);
    } else if (mode.startsWith("Split")) {
      const groups = Number(mode.split("-")[1]);
      return splitIntoGroups(participants, groups);
    }
    return [];
  }, [participants, mode]);

  return {
    participants,
    addParticipant,
    removeParticipant,
    reset,
    mode,
    setMode,
    result,
  };
}
