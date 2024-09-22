import { SortOrder } from "../../util/SortOrder";

export type CreatureQuestCurrencyOrderByInput = {
  createdAt?: SortOrder;
  creatureId?: SortOrder;
  currencyId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  verifiedBuild?: SortOrder;
};
