import { PetLevelstatsWhereInput } from "./PetLevelstatsWhereInput";
import { PetLevelstatsOrderByInput } from "./PetLevelstatsOrderByInput";

export type PetLevelstatsFindManyArgs = {
  where?: PetLevelstatsWhereInput;
  orderBy?: Array<PetLevelstatsOrderByInput>;
  skip?: number;
  take?: number;
};
