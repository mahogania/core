import { GameEventQuestWhereInput } from "./GameEventQuestWhereInput";
import { GameEventQuestOrderByInput } from "./GameEventQuestOrderByInput";

export type GameEventQuestFindManyArgs = {
  where?: GameEventQuestWhereInput;
  orderBy?: Array<GameEventQuestOrderByInput>;
  skip?: number;
  take?: number;
};
