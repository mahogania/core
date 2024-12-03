import { Quest } from "../quest/Quest";

export type Epic = {
  createdAt: Date;
  id: string;
  quests?: Array<Quest>;
  updatedAt: Date;
};
