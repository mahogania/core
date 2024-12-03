import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LandedCostPurchaseReceiptWhereInput = {
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  grandTotal?: FloatNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  postingDate?: DateTimeNullableFilter;
  receiptDocument?: StringNullableFilter;
  receiptDocumentType?: StringNullableFilter;
  supplier?: StringNullableFilter;
};
