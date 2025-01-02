import { FactionWhereUniqueInput } from "../faction/FactionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PlayerFactionSpellWhereInput = {
  faction?: FactionWhereUniqueInput;
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
};