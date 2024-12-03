import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TbClreDedRimexPrngPdlsWhereInput = {
  cmdtClsfSpelCd?: StringNullableFilter;
  delYn?: StringNullableFilter;
  dlngPdlsNm?: StringNullableFilter;
  frstRegstId?: StringNullableFilter;
  frstRgsrDttm?: DateTimeNullableFilter;
  hsCd?: StringNullableFilter;
  hsErrPvntVal?: StringNullableFilter;
  id?: StringFilter;
  lastChgDttm?: DateTimeNullableFilter;
  lastChprId?: StringNullableFilter;
  mdfyDgcnt?: IntNullableFilter;
  orcyCntyCd?: StringNullableFilter;
  pdlsNm?: StringNullableFilter;
  pdlsNtwg?: FloatNullableFilter;
  pdlsTtwg?: FloatNullableFilter;
  prngPdlsNo?: StringNullableFilter;
  qty?: FloatNullableFilter;
  qtyUtCd?: StringNullableFilter;
  reffNo?: StringNullableFilter;
};
