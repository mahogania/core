import { CreatureCreateNestedManyWithoutCreatureModelInfosInput } from "./CreatureCreateNestedManyWithoutCreatureModelInfosInput";

export type CreatureModelInfoCreateInput = {
  boundRadius: number;
  combatRadius: number;
  creatures?: CreatureCreateNestedManyWithoutCreatureModelInfosInput;
  displayId: string;
};
