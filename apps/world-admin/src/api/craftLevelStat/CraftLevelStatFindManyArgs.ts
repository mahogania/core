import { CraftLevelStatWhereInput } from "./CraftLevelStatWhereInput";
import { CraftLevelStatOrderByInput } from "./CraftLevelStatOrderByInput";

export type CraftLevelStatFindManyArgs = {
  where?: CraftLevelStatWhereInput;
  orderBy?: Array<CraftLevelStatOrderByInput>;
  skip?: number;
  take?: number;
};
