import { QuestPoolMember } from "../questPoolMember/QuestPoolMember";

export type PoolMember = {
  createdAt: Date;
  id: string;
  questPoolMembers?: Array<QuestPoolMember>;
  updatedAt: Date;
};
