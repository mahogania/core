import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ClreDedMgWhereInput = {
  delYn?: StringNullableFilter;
  frstRegstId?: StringNullableFilter;
  frstRgsrDttm?: DateTimeNullableFilter;
  id?: StringFilter;
  lastChgDttm?: DateTimeNullableFilter;
  lastChprId?: StringNullableFilter;
  mdfyDgcnt?: IntNullableFilter;
  mgAcNo?: StringNullableFilter;
  mgTpCd?: StringNullableFilter;
  reffNo?: StringNullableFilter;
};
