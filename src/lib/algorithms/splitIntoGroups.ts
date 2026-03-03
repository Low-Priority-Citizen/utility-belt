import { Participant } from "../../types/groupify";

export function splitIntoGroups(
  participants: Participant[],
  groupCount: number,
): Participant[][] {
  if (groupCount <= 0) return [];

  const groups: Participant[][] = Array.from({ length: groupCount }, () => []);
  const shuffle = participants.sort(() => 0.5 - Math.random());
  shuffle.forEach((participant, index) => {
    groups[index % groupCount].push(participant);
  });
  return groups;
}
