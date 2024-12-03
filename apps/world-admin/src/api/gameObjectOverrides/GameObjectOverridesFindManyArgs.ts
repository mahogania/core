import { GameObjectOverridesWhereInput } from "./GameObjectOverridesWhereInput";
import { GameObjectOverridesOrderByInput } from "./GameObjectOverridesOrderByInput";

export type GameObjectOverridesFindManyArgs = {
  where?: GameObjectOverridesWhereInput;
  orderBy?: Array<GameObjectOverridesOrderByInput>;
  skip?: number;
  take?: number;
};
