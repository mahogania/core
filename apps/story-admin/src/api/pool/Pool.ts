import { QuestPool } from "../questPool/QuestPool";

export type Pool = {
  createdAt: Date;
  id: string;
  questPool?: Array<QuestPool>;
  updatedAt: Date;
};
