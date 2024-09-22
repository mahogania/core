import { SortOrder } from "../../util/SortOrder";

export type CreatureOnKillReputationOrderByInput = {
  createdAt?: SortOrder;
  creatureId?: SortOrder;
  id?: SortOrder;
  isTeamAward1?: SortOrder;
  isTeamAward2?: SortOrder;
  maxStanding1?: SortOrder;
  maxStanding2?: SortOrder;
  rewOnKillRepFaction1?: SortOrder;
  rewOnKillRepFaction2?: SortOrder;
  rewOnKillRepValue1?: SortOrder;
  rewOnKillRepValue2?: SortOrder;
  teamDependent?: SortOrder;
  updatedAt?: SortOrder;
};
