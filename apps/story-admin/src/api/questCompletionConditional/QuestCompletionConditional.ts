import { Quest } from "../quest/Quest";

export type QuestCompletionConditional = {
  createdAt: Date;
  id: string;
  quest?: Quest;
  updatedAt: Date;
};
