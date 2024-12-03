import { FactionWhereUniqueInput } from "../faction/FactionWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerFactionAchievementUpdateInput = {
  faction?: FactionWhereUniqueInput;
  player?: PlayerWhereUniqueInput | null;
};
