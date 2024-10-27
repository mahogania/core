import { SortOrder } from "../../util/SortOrder";

export type GameObjectLootTemplateOrderByInput = {
  chance?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  entry?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  lootMode?: SortOrder;
  maxCount?: SortOrder;
  minCount?: SortOrder;
  questId?: SortOrder;
  referenceId?: SortOrder;
  updatedAt?: SortOrder;
};
