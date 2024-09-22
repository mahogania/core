import { GameEventWhereInput } from "./GameEventWhereInput";
import { GameEventOrderByInput } from "./GameEventOrderByInput";

export type GameEventFindManyArgs = {
  where?: GameEventWhereInput;
  orderBy?: Array<GameEventOrderByInput>;
  skip?: number;
  take?: number;
};
