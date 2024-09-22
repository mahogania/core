import { GameEventPoolWhereInput } from "./GameEventPoolWhereInput";
import { GameEventPoolOrderByInput } from "./GameEventPoolOrderByInput";

export type GameEventPoolFindManyArgs = {
  where?: GameEventPoolWhereInput;
  orderBy?: Array<GameEventPoolOrderByInput>;
  skip?: number;
  take?: number;
};
