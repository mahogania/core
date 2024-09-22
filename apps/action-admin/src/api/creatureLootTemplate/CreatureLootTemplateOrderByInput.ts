import { SortOrder } from "../../util/SortOrder";

export type CreatureLootTemplateOrderByInput = {
  chance?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  entry?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  item?: SortOrder;
  lootMode?: SortOrder;
  maxCount?: SortOrder;
  minCount?: SortOrder;
  questRequired?: SortOrder;
  reference?: SortOrder;
  updatedAt?: SortOrder;
};
