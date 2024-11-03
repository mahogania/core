import { QuestRequestItem } from "../questRequestItem/QuestRequestItem";

export type QuestRequestItemConditional = {
  createdAt: Date;
  id: string;
  questRequestItem?: QuestRequestItem | null;
  updatedAt: Date;
};
