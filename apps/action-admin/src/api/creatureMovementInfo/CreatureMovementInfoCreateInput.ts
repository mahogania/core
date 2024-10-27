import { CreatureCreateNestedManyWithoutCreatureMovementInfosInput } from "./CreatureCreateNestedManyWithoutCreatureMovementInfosInput";

export type CreatureMovementInfoCreateInput = {
  creatures?: CreatureCreateNestedManyWithoutCreatureMovementInfosInput;
  movementId: string;
  speed?: number | null;
};
