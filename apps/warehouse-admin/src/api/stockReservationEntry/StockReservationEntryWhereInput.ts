import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StockReservationEntryWhereInput = {
  amendedFrom?: StringNullableFilter;
  availableQty?: FloatNullableFilter;
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  deliveredQty?: FloatNullableFilter;
  docstatus?: IntNullableFilter;
  fromVoucherDetailNo?: StringNullableFilter;
  fromVoucherNo?: StringNullableFilter;
  fromVoucherType?: StringNullableFilter;
  hasBatchNo?: BooleanNullableFilter;
  hasSerialNo?: BooleanNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  itemCode?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  project?: StringNullableFilter;
  reservationBasedOn?: StringNullableFilter;
  reservedQty?: FloatNullableFilter;
  status?: StringNullableFilter;
  stockUom?: StringNullableFilter;
  voucherDetailNo?: StringNullableFilter;
  voucherNo?: StringNullableFilter;
  voucherQty?: FloatNullableFilter;
  voucherType?: StringNullableFilter;
  warehouse?: StringNullableFilter;
};
