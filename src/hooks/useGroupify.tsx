import { useEffect, useState } from "react";
import { Participant } from "../types/groupify";
import { GroupifyMode } from "../types/groupifyMode";
import { selectRandomParticipants } from "../lib/algorithms/selectRandom";
import { splitIntoGroups } from "../lib/algorithms/splitIntoGroups";
import * as Haptics from "expo-haptics";

export default function useGroupify() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [phase, setPhase] = useState<"waiting" | "countdown" | "result">(
    "waiting",
  );
  const [mode, setMode] = useState<GroupifyMode>("split-2");
  const [countdown, setCountdown] = useState(2);

  const addParticipant = (participant: Participant) => {
    setParticipants((prev) => [...prev, participant]);
    console.log("Adding", participant.id);
  };

  const updateParticipant = (id: string, x: number, y: number) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, x, y } : p)),
    );
  };

  const removeParticipant = (id: string) => {
    setParticipants((prev) => prev.filter((p) => p.id !== id));
    console.log("Removing", id);
  };

  const reset = () => {
    setParticipants([]);
  };

  function runSelection() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    if (mode.startsWith("random")) {
      const count = Number(mode.split("-")[1]);

      const winners = selectRandomParticipants(participants, count);

      setParticipants(winners);
    }

    if (mode.startsWith("split")) {
      const groups = Number(mode.split("-")[1]);

      const result = splitIntoGroups(participants, groups);

      const colored: Participant[] = [];

      result.forEach((group, index) => {
        group.forEach((p) => {
          colored.push({
            ...p,
            team: index,
          });
        });
      });

      setParticipants(colored);
    }

    setPhase("result");
  }

  useEffect(() => {
    if (participants.length === 0) return;

    setPhase("countdown");
    setCountdown(2);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          runSelection();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [participants.length]);

  return {
    participants,
    addParticipant,
    updateParticipant,
    removeParticipant,
    reset,
    mode,
    setMode,
    countdown,
    phase,
  };
}