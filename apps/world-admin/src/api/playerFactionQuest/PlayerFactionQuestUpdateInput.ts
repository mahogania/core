import { FactionWhereUniqueInput } from "../faction/FactionWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerFactionQuestUpdateInput = {
  faction?: FactionWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
  questId?: string | null;
  state?: string | null;
};
