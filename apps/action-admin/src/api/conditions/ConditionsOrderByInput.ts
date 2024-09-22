import { SortOrder } from "../../util/SortOrder";

export type ConditionsOrderByInput = {
  comment?: SortOrder;
  conditionStringValue1?: SortOrder;
  conditionTarget?: SortOrder;
  conditionTypeOrReference?: SortOrder;
  conditionValue1?: SortOrder;
  conditionValue2?: SortOrder;
  conditionValue3?: SortOrder;
  createdAt?: SortOrder;
  elseGroup?: SortOrder;
  errorTextId?: SortOrder;
  errorType?: SortOrder;
  id?: SortOrder;
  negativeCondition?: SortOrder;
  scriptName?: SortOrder;
  sourceEntry?: SortOrder;
  sourceGroup?: SortOrder;
  sourceId?: SortOrder;
  sourceTypeOrReferenceId?: SortOrder;
  updatedAt?: SortOrder;
};
