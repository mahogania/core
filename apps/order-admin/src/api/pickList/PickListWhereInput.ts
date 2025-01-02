import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PickListWhereInput = {
  amendedFrom?: StringNullableFilter;
  company?: StringNullableFilter;
  considerRejectedWarehouses?: IntNullableFilter;
  creation?: DateTimeNullableFilter;
  customer?: StringNullableFilter;
  customerName?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  forQty?: FloatNullableFilter;
  groupSameItems?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  ignorePricingRule?: IntNullableFilter;
  materialRequest?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  namingSeries?: StringNullableFilter;
  owner?: StringNullableFilter;
  parentWarehouse?: StringNullableFilter;
  pickManually?: IntNullableFilter;
  promptQty?: IntNullableFilter;
  purpose?: StringNullableFilter;
  scanBarcode?: StringNullableFilter;
  scanMode?: IntNullableFilter;
  status?: StringNullableFilter;
  workOrder?: StringNullableFilter;
};