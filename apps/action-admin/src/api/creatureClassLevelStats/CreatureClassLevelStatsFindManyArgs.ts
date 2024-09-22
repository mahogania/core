import { CreatureClassLevelStatsWhereInput } from "./CreatureClassLevelStatsWhereInput";
import { CreatureClassLevelStatsOrderByInput } from "./CreatureClassLevelStatsOrderByInput";

export type CreatureClassLevelStatsFindManyArgs = {
  where?: CreatureClassLevelStatsWhereInput;
  orderBy?: Array<CreatureClassLevelStatsOrderByInput>;
  skip?: number;
  take?: number;
};
