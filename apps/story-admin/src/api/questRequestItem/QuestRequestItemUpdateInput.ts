import { QuestRequestItemConditionalUpdateManyWithoutQuestRequestItemsInput } from "./QuestRequestItemConditionalUpdateManyWithoutQuestRequestItemsInput";
import { QuestRequestItemsLocaleUpdateManyWithoutQuestRequestItemsInput } from "./QuestRequestItemsLocaleUpdateManyWithoutQuestRequestItemsInput";
import { QuestTemplateUpdateManyWithoutQuestRequestItemsInput } from "./QuestTemplateUpdateManyWithoutQuestRequestItemsInput";

export type QuestRequestItemUpdateInput = {
  questRequestItemConditionals?: QuestRequestItemConditionalUpdateManyWithoutQuestRequestItemsInput;
  questRequestItemsLocales?: QuestRequestItemsLocaleUpdateManyWithoutQuestRequestItemsInput;
  questTemplates?: QuestTemplateUpdateManyWithoutQuestRequestItemsInput;
};
