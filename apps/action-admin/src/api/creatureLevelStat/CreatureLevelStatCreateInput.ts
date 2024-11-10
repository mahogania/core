import { CreatureCreateNestedManyWithoutCreatureLevelStatsInput } from "./CreatureCreateNestedManyWithoutCreatureLevelStatsInput";

export type CreatureLevelStatCreateInput = {
  Prana?: number | null;
  comment?: string | null;
  creatures?: CreatureCreateNestedManyWithoutCreatureLevelStatsInput;
  kind?: number | null;
  level?: number | null;
  power?: number | null;
};
