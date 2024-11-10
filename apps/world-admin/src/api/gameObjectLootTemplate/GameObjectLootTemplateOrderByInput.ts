import { SortOrder } from "../../util/SortOrder";

export type GameObjectLootTemplateOrderByInput = {
  chance?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  lootMode?: SortOrder;
  lootTemplateId?: SortOrder;
  maxCount?: SortOrder;
  minCount?: SortOrder;
  questId?: SortOrder;
  updatedAt?: SortOrder;
};
