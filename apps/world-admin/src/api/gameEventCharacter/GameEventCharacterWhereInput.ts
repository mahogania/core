import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type GameEventCharacterWhereInput = {
  id?: StringFilter;
  npcId?: IntFilter;
};
