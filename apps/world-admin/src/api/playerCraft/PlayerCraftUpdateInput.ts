import { CraftWhereUniqueInput } from "../craft/CraftWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerCraftUpdateInput = {
  craft?: CraftWhereUniqueInput;
  player?: PlayerWhereUniqueInput;
};
