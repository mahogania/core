import { SortOrder } from "../../util/SortOrder";

export type CreatureImmunitiesOrderByInput = {
  auras?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  dispelTypeMask?: SortOrder;
  effects?: SortOrder;
  id?: SortOrder;
  immuneAoE?: SortOrder;
  immuneChain?: SortOrder;
  mechanicsMask?: SortOrder;
  schoolMask?: SortOrder;
  updatedAt?: SortOrder;
};
