import { QuestTemplateCreateNestedManyWithoutQuestMailsInput } from "./QuestTemplateCreateNestedManyWithoutQuestMailsInput";

export type QuestMailCreateInput = {
  decription: string;
  name: string;
  questTemplates?: QuestTemplateCreateNestedManyWithoutQuestMailsInput;
};
