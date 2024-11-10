import { Pool } from "../pool/Pool";
import { QuestPoolMember } from "../questPoolMember/QuestPoolMember";
import { QuestTemplate } from "../questTemplate/QuestTemplate";

export type QuestPool = {
  createdAt: Date;
  id: string;
  pool?: Pool;
  questPoolMembers?: QuestPoolMember | null;
  questTemplates?: Array<QuestTemplate>;
  updatedAt: Date;
};
