import { SortOrder } from "../../util/SortOrder";

export type QuestPoolOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  poolId?: SortOrder;
  questPoolMembersId?: SortOrder;
  updatedAt?: SortOrder;
};
