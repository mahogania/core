import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BulkTransactionLogDetailWhereInput = {
  creation?: DateTimeNullableFilter;
  date?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  errorDescription?: StringNullableFilter;
  fromDoctype?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  retried?: IntNullableFilter;
  time?: DateTimeNullableFilter;
  toDoctype?: StringNullableFilter;
  transactionName?: StringNullableFilter;
  transactionStatus?: StringNullableFilter;
};
