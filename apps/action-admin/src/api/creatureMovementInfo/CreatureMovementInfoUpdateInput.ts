import { CreatureUpdateManyWithoutCreatureMovementInfosInput } from "./CreatureUpdateManyWithoutCreatureMovementInfosInput";

export type CreatureMovementInfoUpdateInput = {
  creatures?: CreatureUpdateManyWithoutCreatureMovementInfosInput;
  movementId?: string;
  speed?: number | null;
};
