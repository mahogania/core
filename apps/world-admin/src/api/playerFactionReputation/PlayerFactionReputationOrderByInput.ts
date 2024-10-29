import { SortOrder } from "../../util/SortOrder";

export type PlayerFactionReputationOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  factionId?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  updatedAt?: SortOrder;
};
