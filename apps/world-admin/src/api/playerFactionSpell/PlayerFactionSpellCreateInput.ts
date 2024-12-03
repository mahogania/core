import { FactionWhereUniqueInput } from "../faction/FactionWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerFactionSpellCreateInput = {
  faction?: FactionWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
};
