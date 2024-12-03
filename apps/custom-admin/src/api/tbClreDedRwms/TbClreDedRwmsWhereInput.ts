import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TbClreDedRwmsWhereInput = {
  bfCmdtClsfSpelCd?: StringNullableFilter;
  bfDtlDcshNo?: StringNullableFilter;
  bfHsCd?: StringNullableFilter;
  bfPdlsNo?: StringNullableFilter;
  delYn?: StringNullableFilter;
  divdFfmnTpCd?: StringNullableFilter;
  frstRegstId?: StringNullableFilter;
  frstRgsrDttm?: DateTimeNullableFilter;
  id?: StringFilter;
  lastChgDttm?: DateTimeNullableFilter;
  lastChprId?: StringNullableFilter;
  mdfyDgcnt?: IntNullableFilter;
  ntwg?: FloatNullableFilter;
  pdlsNo?: StringNullableFilter;
  qty?: FloatNullableFilter;
  qtyUtCd?: StringNullableFilter;
  reffNo?: StringNullableFilter;
  rwmsSrno?: IntNullableFilter;
};
