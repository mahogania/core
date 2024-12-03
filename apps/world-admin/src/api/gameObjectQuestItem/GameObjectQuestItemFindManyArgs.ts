import { GameObjectQuestItemWhereInput } from "./GameObjectQuestItemWhereInput";
import { GameObjectQuestItemOrderByInput } from "./GameObjectQuestItemOrderByInput";

export type GameObjectQuestItemFindManyArgs = {
  where?: GameObjectQuestItemWhereInput;
  orderBy?: Array<GameObjectQuestItemOrderByInput>;
  skip?: number;
  take?: number;
};
