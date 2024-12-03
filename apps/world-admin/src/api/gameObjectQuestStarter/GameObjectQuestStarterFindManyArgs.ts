import { GameObjectQuestStarterWhereInput } from "./GameObjectQuestStarterWhereInput";
import { GameObjectQuestStarterOrderByInput } from "./GameObjectQuestStarterOrderByInput";

export type GameObjectQuestStarterFindManyArgs = {
  where?: GameObjectQuestStarterWhereInput;
  orderBy?: Array<GameObjectQuestStarterOrderByInput>;
  skip?: number;
  take?: number;
};
