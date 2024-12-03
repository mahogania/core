import { QuestObjective } from "../questObjective/QuestObjective";

export type QuestObjectiveLocale = {
  createdAt: Date;
  id: string;
  questObjectives?: Array<QuestObjective>;
  updatedAt: Date;
};
