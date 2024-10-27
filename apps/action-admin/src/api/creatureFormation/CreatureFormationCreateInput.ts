import { CreatureCreateNestedManyWithoutCreatureFormationsInput } from "./CreatureCreateNestedManyWithoutCreatureFormationsInput";

export type CreatureFormationCreateInput = {
  angle?: number | null;
  boxId?: string | null;
  creatures?: CreatureCreateNestedManyWithoutCreatureFormationsInput;
  dist?: number | null;
  groupId?: string | null;
  leaderId: string;
  memberId?: string | null;
};
