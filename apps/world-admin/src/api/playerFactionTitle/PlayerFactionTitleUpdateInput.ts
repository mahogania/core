import { FactionWhereUniqueInput } from "../faction/FactionWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerFactionTitleUpdateInput = {
  faction?: FactionWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
};
