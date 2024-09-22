import { GameEventQuestConditionWhereInput } from "./GameEventQuestConditionWhereInput";
import { GameEventQuestConditionOrderByInput } from "./GameEventQuestConditionOrderByInput";

export type GameEventQuestConditionFindManyArgs = {
  where?: GameEventQuestConditionWhereInput;
  orderBy?: Array<GameEventQuestConditionOrderByInput>;
  skip?: number;
  take?: number;
};
