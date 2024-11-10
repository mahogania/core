import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerXpForLevelWhereInput = {
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
};
