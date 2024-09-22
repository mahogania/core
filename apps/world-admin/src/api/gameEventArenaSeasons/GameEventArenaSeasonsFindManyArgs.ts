import { GameEventArenaSeasonsWhereInput } from "./GameEventArenaSeasonsWhereInput";
import { GameEventArenaSeasonsOrderByInput } from "./GameEventArenaSeasonsOrderByInput";

export type GameEventArenaSeasonsFindManyArgs = {
  where?: GameEventArenaSeasonsWhereInput;
  orderBy?: Array<GameEventArenaSeasonsOrderByInput>;
  skip?: number;
  take?: number;
};
