import { CreatureUpdateManyWithoutCreatureFormationsInput } from "./CreatureUpdateManyWithoutCreatureFormationsInput";

export type CreatureFormationUpdateInput = {
  angle?: number | null;
  boxId?: string | null;
  creatures?: CreatureUpdateManyWithoutCreatureFormationsInput;
  dist?: number | null;
  groupId?: string | null;
  leaderId?: string;
  memberId?: string | null;
};
