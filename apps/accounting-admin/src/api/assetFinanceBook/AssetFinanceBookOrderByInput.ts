import { SortOrder } from "../../util/SortOrder";

export type AssetFinanceBookOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  dailyProrataBased?: SortOrder;
  depreciationMethod?: SortOrder;
  depreciationStartDate?: SortOrder;
  docstatus?: SortOrder;
  expectedValueAfterUsefulLife?: SortOrder;
  financeBook?: SortOrder;
  frequencyOfDepreciation?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  rateOfDepreciation?: SortOrder;
  salvageValuePercentage?: SortOrder;
  shiftBased?: SortOrder;
  totalNumberOfBookedDepreciations?: SortOrder;
  totalNumberOfDepreciations?: SortOrder;
  updatedAt?: SortOrder;
  valueAfterDepreciation?: SortOrder;
};
