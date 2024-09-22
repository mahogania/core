import { GameTeleWhereInput } from "./GameTeleWhereInput";
import { GameTeleOrderByInput } from "./GameTeleOrderByInput";

export type GameTeleFindManyArgs = {
  where?: GameTeleWhereInput;
  orderBy?: Array<GameTeleOrderByInput>;
  skip?: number;
  take?: number;
};
