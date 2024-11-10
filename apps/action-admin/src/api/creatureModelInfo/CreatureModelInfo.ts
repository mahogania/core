import { Creature } from "../creature/Creature";

export type CreatureModelInfo = {
  boundRadius: number;
  combatRadius: number;
  createdAt: Date;
  creatures?: Array<Creature>;
  displayId: string;
  id: string;
  updatedAt: Date;
};
