import { QuestRequestItem } from "../questRequestItem/QuestRequestItem";

export type QuestRequestItemsLocale = {
  createdAt: Date;
  id: string;
  questRequestItem?: QuestRequestItem | null;
  updatedAt: Date;
};
