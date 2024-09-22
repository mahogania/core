import { GameEventGameObjectWhereInput } from "./GameEventGameObjectWhereInput";
import { GameEventGameObjectOrderByInput } from "./GameEventGameObjectOrderByInput";

export type GameEventGameObjectFindManyArgs = {
  where?: GameEventGameObjectWhereInput;
  orderBy?: Array<GameEventGameObjectOrderByInput>;
  skip?: number;
  take?: number;
};
