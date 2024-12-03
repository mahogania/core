import { QuestObjective } from "../questObjective/QuestObjective";

export type QuestObjectiveCompletionEffect = {
  createdAt: Date;
  id: string;
  questObjectives?: Array<QuestObjective>;
  updatedAt: Date;
};
