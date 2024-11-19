import { FactionWhereUniqueInput } from "../faction/FactionWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerFactionAchievementCreateInput = {
  faction: FactionWhereUniqueInput;
  player?: PlayerWhereUniqueInput | null;
};
