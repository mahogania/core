import { GameEventCharacterWhereInput } from "./GameEventCharacterWhereInput";
import { GameEventCharacterOrderByInput } from "./GameEventCharacterOrderByInput";

export type GameEventCharacterFindManyArgs = {
  where?: GameEventCharacterWhereInput;
  orderBy?: Array<GameEventCharacterOrderByInput>;
  skip?: number;
  take?: number;
};
