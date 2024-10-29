import { PlayerCreateNestedManyWithoutGeneStatsInput } from "./PlayerCreateNestedManyWithoutGeneStatsInput";

export type GeneStatCreateInput = {
  players?: PlayerCreateNestedManyWithoutGeneStatsInput;
};
