import { QuestTemplate } from "../questTemplate/QuestTemplate";

export type QuestTemplateLocale = {
  createdAt: Date;
  id: string;
  questTemplates?: Array<QuestTemplate>;
  updatedAt: Date;
};
