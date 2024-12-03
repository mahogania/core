import { GameObjectWhereInput } from "./GameObjectWhereInput";
import { GameObjectOrderByInput } from "./GameObjectOrderByInput";

export type GameObjectFindManyArgs = {
  where?: GameObjectWhereInput;
  orderBy?: Array<GameObjectOrderByInput>;
  skip?: number;
  take?: number;
};
