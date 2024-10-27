import { CreatureUpdateManyWithoutCreatureModelInfosInput } from "./CreatureUpdateManyWithoutCreatureModelInfosInput";

export type CreatureModelInfoUpdateInput = {
  boundRadius?: number;
  combatRadius?: number;
  creatures?: CreatureUpdateManyWithoutCreatureModelInfosInput;
  displayId?: string;
};
