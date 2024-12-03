import { CraftWhereUniqueInput } from "../craft/CraftWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerCraftCreateInput = {
  craft: CraftWhereUniqueInput;
  player: PlayerWhereUniqueInput;
};
