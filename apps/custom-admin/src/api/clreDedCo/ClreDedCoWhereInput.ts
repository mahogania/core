import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ClreDedCoWhereInput = {
  dcerAddr?: StringNullableFilter;
  dcerCoNm?: StringNullableFilter;
  delYn?: StringNullableFilter;
  exppnAddr?: StringNullableFilter;
  exppnCoNm?: StringNullableFilter;
  exppnEml?: StringNullableFilter;
  frstRegstId?: StringNullableFilter;
  frstRgsrDttm?: DateTimeNullableFilter;
  id?: StringFilter;
  imppnAddr?: StringNullableFilter;
  imppnCoNm?: StringNullableFilter;
  lastChgDttm?: DateTimeNullableFilter;
  lastChprId?: StringNullableFilter;
  mdfyDgcnt?: IntNullableFilter;
  reffNo?: StringNullableFilter;
  txprAddr?: StringNullableFilter;
  txprCoNm?: StringNullableFilter;
  txprEml?: StringNullableFilter;
  txprTlphNo?: StringNullableFilter;
};
