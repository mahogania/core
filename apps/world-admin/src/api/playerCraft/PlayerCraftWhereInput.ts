import { CraftWhereUniqueInput } from "../craft/CraftWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerCraftWhereInput = {
  craft?: CraftWhereUniqueInput;
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
};
