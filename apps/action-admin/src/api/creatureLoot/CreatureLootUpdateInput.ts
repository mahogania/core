import { CreatureUpdateManyWithoutCreatureLootsInput } from "./CreatureUpdateManyWithoutCreatureLootsInput";

export type CreatureLootUpdateInput = {
  chance?: number;
  comment?: string | null;
  creatures?: CreatureUpdateManyWithoutCreatureLootsInput;
  itemId?: string;
  maxCount?: number;
  minCount?: number;
  questId?: string | null;
};
