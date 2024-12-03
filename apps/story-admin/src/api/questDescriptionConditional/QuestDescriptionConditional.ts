import { Quest } from "../quest/Quest";

export type QuestDescriptionConditional = {
  createdAt: Date;
  id: string;
  quests?: Quest | null;
  updatedAt: Date;
};
