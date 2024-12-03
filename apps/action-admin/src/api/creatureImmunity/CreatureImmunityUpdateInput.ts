import { CreatureUpdateManyWithoutCreatureImmunitiesInput } from "./CreatureUpdateManyWithoutCreatureImmunitiesInput";

export type CreatureImmunityUpdateInput = {
  auras?: string | null;
  comment?: string | null;
  creatures?: CreatureUpdateManyWithoutCreatureImmunitiesInput;
  dispelMask?: string;
  effects?: string | null;
  mechanicMask?: string;
  schoolMask?: string;
};
