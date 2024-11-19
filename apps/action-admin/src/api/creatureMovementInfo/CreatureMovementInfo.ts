import { Creature } from "../creature/Creature";

export type CreatureMovementInfo = {
  createdAt: Date;
  creatures?: Array<Creature>;
  id: string;
  movementId: string;
  speed: number | null;
  updatedAt: Date;
};
