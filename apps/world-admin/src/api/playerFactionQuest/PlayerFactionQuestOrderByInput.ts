import { SortOrder } from "../../util/SortOrder";

export type PlayerFactionQuestOrderByInput = {
  createdAt?: SortOrder;
  factionId?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  questId?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
};
