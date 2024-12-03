import { Creature } from "../creature/Creature";

export type CreatureImmunity = {
  auras: string | null;
  comment: string | null;
  createdAt: Date;
  creatures?: Array<Creature>;
  dispelMask: string;
  effects: string | null;
  id: string;
  mechanicMask: string;
  schoolMask: string;
  updatedAt: Date;
};
