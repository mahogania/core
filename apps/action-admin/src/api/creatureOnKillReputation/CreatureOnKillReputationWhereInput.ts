import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureOnKillReputationWhereInput = {
  creatureId?: IntNullableFilter;
  id?: StringFilter;
  isTeamAward1?: IntNullableFilter;
  isTeamAward2?: IntNullableFilter;
  maxStanding1?: IntNullableFilter;
  maxStanding2?: IntNullableFilter;
  rewOnKillRepFaction1?: IntNullableFilter;
  rewOnKillRepFaction2?: IntNullableFilter;
  rewOnKillRepValue1?: IntNullableFilter;
  rewOnKillRepValue2?: IntNullableFilter;
  teamDependent?: IntNullableFilter;
};
