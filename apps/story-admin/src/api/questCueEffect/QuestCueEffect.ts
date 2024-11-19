import { Quest } from "../quest/Quest";

export type QuestCueEffect = {
  createdAt: Date;
  id: string;
  quests?: Array<Quest>;
  updatedAt: Date;
};
