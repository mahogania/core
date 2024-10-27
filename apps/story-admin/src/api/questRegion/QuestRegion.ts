import { QuestObjective } from "../questObjective/QuestObjective";
import { QuestPoi } from "../questPoi/QuestPoi";

export type QuestRegion = {
  createdAt: Date;
  id: string;
  name: string;
  questObjectives?: Array<QuestObjective>;
  questPoiPoints?: Array<QuestPoi>;
  updatedAt: Date;
};
