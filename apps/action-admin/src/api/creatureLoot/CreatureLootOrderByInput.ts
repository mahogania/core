import { SortOrder } from "../../util/SortOrder";

export type CreatureLootOrderByInput = {
  chance?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  maxCount?: SortOrder;
  minCount?: SortOrder;
  questId?: SortOrder;
  updatedAt?: SortOrder;
};
