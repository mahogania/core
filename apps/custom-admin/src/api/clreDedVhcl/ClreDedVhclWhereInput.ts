import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ClreDedVhclWhereInput = {
  caboNm?: StringNullableFilter;
  carRgsrNo?: StringNullableFilter;
  chssNo?: StringNullableFilter;
  clrNm?: StringNullableFilter;
  delYn?: StringNullableFilter;
  dpcmtCn?: StringNullableFilter;
  drvrAddr?: StringNullableFilter;
  drvrNm?: StringNullableFilter;
  drvrPostNo?: StringNullableFilter;
  flKndNm?: StringNullableFilter;
  frstOpraDt?: StringNullableFilter;
  frstRegstId?: StringNullableFilter;
  frstRgsrDttm?: DateTimeNullableFilter;
  id?: StringFilter;
  impPtNm?: StringNullableFilter;
  lastChgDttm?: DateTimeNullableFilter;
  lastChprId?: StringNullableFilter;
  loadWghtCn?: StringNullableFilter;
  mdfyDgcnt?: IntNullableFilter;
  mdlStszNo?: StringNullableFilter;
  mkngYy?: StringNullableFilter;
  otptCn?: StringNullableFilter;
  pdlsNo?: StringNullableFilter;
  reffNo?: StringNullableFilter;
  stcnt?: IntNullableFilter;
  tpdMgmtNo?: StringNullableFilter;
  trsfNnprEndDt?: StringNullableFilter;
  trsfNnprStrtDt?: StringNullableFilter;
  trsfNnprYn?: StringNullableFilter;
  vhclKndCd?: StringNullableFilter;
  vhclKndNm?: StringNullableFilter;
  vhclMdlCd?: StringNullableFilter;
  vhclMnurCd?: StringNullableFilter;
  vhclReleDt?: StringNullableFilter;
  vhclWghtCn?: StringNullableFilter;
};