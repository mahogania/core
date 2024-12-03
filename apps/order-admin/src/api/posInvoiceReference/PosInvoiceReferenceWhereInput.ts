import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PosInvoiceReferenceWhereInput = {
  creation?: DateTimeNullableFilter;
  customer?: StringNullableFilter;
  docStatus?: IntNullableFilter;
  grandTotal?: FloatNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isReturn?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
  posInvoice?: StringNullableFilter;
  postingDate?: DateTimeNullableFilter;
  returnAgainst?: StringNullableFilter;
};
