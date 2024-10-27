import { CreatureUpdateManyWithoutCreatureLevelStatsInput } from "./CreatureUpdateManyWithoutCreatureLevelStatsInput";

export type CreatureLevelStatUpdateInput = {
  Prana?: number | null;
  comment?: string | null;
  creatures?: CreatureUpdateManyWithoutCreatureLevelStatsInput;
  kind?: number | null;
  level?: number | null;
  power?: number | null;
};
