import { FactionWhereUniqueInput } from "../faction/FactionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlayerFactionQuestWhereInput = {
  faction?: FactionWhereUniqueInput;
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
  questId?: StringNullableFilter;
  state?: StringNullableFilter;
};
