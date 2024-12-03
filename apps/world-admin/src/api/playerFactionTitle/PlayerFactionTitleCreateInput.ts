import { FactionWhereUniqueInput } from "../faction/FactionWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerFactionTitleCreateInput = {
  faction?: FactionWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
};
