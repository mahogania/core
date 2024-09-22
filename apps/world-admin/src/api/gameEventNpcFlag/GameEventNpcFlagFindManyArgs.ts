import { GameEventNpcFlagWhereInput } from "./GameEventNpcFlagWhereInput";
import { GameEventNpcFlagOrderByInput } from "./GameEventNpcFlagOrderByInput";

export type GameEventNpcFlagFindManyArgs = {
  where?: GameEventNpcFlagWhereInput;
  orderBy?: Array<GameEventNpcFlagOrderByInput>;
  skip?: number;
  take?: number;
};
