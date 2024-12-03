import { GameEventConditionWhereInput } from "./GameEventConditionWhereInput";
import { GameEventConditionOrderByInput } from "./GameEventConditionOrderByInput";

export type GameEventConditionFindManyArgs = {
  where?: GameEventConditionWhereInput;
  orderBy?: Array<GameEventConditionOrderByInput>;
  skip?: number;
  take?: number;
};
