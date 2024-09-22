import { GameEventCreatureQuestWhereInput } from "./GameEventCreatureQuestWhereInput";
import { GameEventCreatureQuestOrderByInput } from "./GameEventCreatureQuestOrderByInput";

export type GameEventCreatureQuestFindManyArgs = {
  where?: GameEventCreatureQuestWhereInput;
  orderBy?: Array<GameEventCreatureQuestOrderByInput>;
  skip?: number;
  take?: number;
};
