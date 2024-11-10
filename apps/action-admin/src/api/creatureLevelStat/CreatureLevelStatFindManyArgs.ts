import { CreatureLevelStatWhereInput } from "./CreatureLevelStatWhereInput";
import { CreatureLevelStatOrderByInput } from "./CreatureLevelStatOrderByInput";

export type CreatureLevelStatFindManyArgs = {
  where?: CreatureLevelStatWhereInput;
  orderBy?: Array<CreatureLevelStatOrderByInput>;
  skip?: number;
  take?: number;
};
