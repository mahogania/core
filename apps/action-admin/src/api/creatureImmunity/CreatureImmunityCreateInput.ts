import { CreatureCreateNestedManyWithoutCreatureImmunitiesInput } from "./CreatureCreateNestedManyWithoutCreatureImmunitiesInput";

export type CreatureImmunityCreateInput = {
  auras?: string | null;
  comment?: string | null;
  creatures?: CreatureCreateNestedManyWithoutCreatureImmunitiesInput;
  dispelMask: string;
  effects?: string | null;
  mechanicMask: string;
  schoolMask: string;
};
