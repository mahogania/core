import { QuestRequestItemConditional } from "../questRequestItemConditional/QuestRequestItemConditional";
import { QuestRequestItemsLocale } from "../questRequestItemsLocale/QuestRequestItemsLocale";
import { QuestTemplate } from "../questTemplate/QuestTemplate";

export type QuestRequestItem = {
  createdAt: Date;
  id: string;
  questRequestItemConditionals?: Array<QuestRequestItemConditional>;
  questRequestItemsLocales?: Array<QuestRequestItemsLocale>;
  questTemplates?: Array<QuestTemplate>;
  updatedAt: Date;
};
