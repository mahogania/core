import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentReconciliationLogWhereInput = {
  allocated?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  errorLog?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  processPr?: StringNullableFilter;
  reconciled?: IntNullableFilter;
  reconciledEntries?: IntNullableFilter;
  status?: StringNullableFilter;
  totalAllocations?: IntNullableFilter;
};
