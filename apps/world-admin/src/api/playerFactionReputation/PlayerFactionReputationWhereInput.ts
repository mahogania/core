import { IntFilter } from "../../util/IntFilter";
import { FactionWhereUniqueInput } from "../faction/FactionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerFactionReputationWhereInput = {
  amount?: IntFilter;
  faction?: FactionWhereUniqueInput;
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
};
