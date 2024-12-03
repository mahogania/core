import { JsonValue } from "type-fest";
import { Creature } from "../creature/Creature";

export type CreatureEquipment = {
  appereance: JsonValue;
  createdAt: Date;
  creatures?: Array<Creature>;
  id: string;
  updatedAt: Date;
  visual: JsonValue;
};
