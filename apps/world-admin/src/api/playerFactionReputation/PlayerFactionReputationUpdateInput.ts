import { FactionWhereUniqueInput } from "../faction/FactionWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerFactionReputationUpdateInput = {
  amount?: number;
  faction?: FactionWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
};
