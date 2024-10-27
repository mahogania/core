import { CreatureCreateNestedManyWithoutCreatureLootsInput } from "./CreatureCreateNestedManyWithoutCreatureLootsInput";

export type CreatureLootCreateInput = {
  chance: number;
  comment?: string | null;
  creatures?: CreatureCreateNestedManyWithoutCreatureLootsInput;
  itemId: string;
  maxCount: number;
  minCount: number;
  questId?: string | null;
};
