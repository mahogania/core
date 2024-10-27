import { Creature } from "../creature/Creature";

export type CreatureLevelStat = {
  Prana: number | null;
  comment: string | null;
  createdAt: Date;
  creatures?: Array<Creature>;
  id: string;
  kind: number | null;
  level: number | null;
  power: number | null;
  updatedAt: Date;
};
