import { Quest } from "../quest/Quest";

export type QuestDetail = {
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  quests?: Array<Quest>;
  updatedAt: Date;
};
