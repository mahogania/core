import { GameEventCreatureWhereInput } from "./GameEventCreatureWhereInput";
import { GameEventCreatureOrderByInput } from "./GameEventCreatureOrderByInput";

export type GameEventCreatureFindManyArgs = {
  where?: GameEventCreatureWhereInput;
  orderBy?: Array<GameEventCreatureOrderByInput>;
  skip?: number;
  take?: number;
};
