import { Creature } from "../creature/Creature";

export type CreatureLoot = {
  chance: number;
  comment: string | null;
  createdAt: Date;
  creatures?: Array<Creature>;
  id: string;
  itemId: string;
  maxCount: number;
  minCount: number;
  questId: string | null;
  updatedAt: Date;
};
