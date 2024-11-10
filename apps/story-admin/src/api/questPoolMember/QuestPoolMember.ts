import { PoolMember } from "../poolMember/PoolMember";
import { QuestPool } from "../questPool/QuestPool";

export type QuestPoolMember = {
  createdAt: Date;
  id: string;
  poolMember?: PoolMember;
  questPoolTemplates?: Array<QuestPool>;
  updatedAt: Date;
};
