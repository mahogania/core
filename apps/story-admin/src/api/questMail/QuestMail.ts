import { QuestTemplate } from "../questTemplate/QuestTemplate";

export type QuestMail = {
  createdAt: Date;
  decription: string;
  id: string;
  name: string;
  questTemplates?: Array<QuestTemplate>;
  updatedAt: Date;
};
