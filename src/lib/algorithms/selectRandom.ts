import { Participant } from "../../types/groupify";

export function selectRandomParticipants(
  participants: Participant[],
  count: number,
): Participant[] {
  const shuffle = [...participants].sort(() => 0.5 - Math.random());
  return shuffle.slice(0, count);
}
