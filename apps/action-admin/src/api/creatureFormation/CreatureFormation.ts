import { Creature } from "../creature/Creature";

export type CreatureFormation = {
  angle: number | null;
  boxId: string | null;
  createdAt: Date;
  creatures?: Array<Creature>;
  dist: number | null;
  groupId: string | null;
  id: string;
  leaderId: string;
  memberId: string | null;
  updatedAt: Date;
};
