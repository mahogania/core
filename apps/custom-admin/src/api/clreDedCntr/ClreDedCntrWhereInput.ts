import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClreDedCntrWhereInput = {
  cntrNo?: StringNullableFilter;
  cntrSrno?: IntNullableFilter;
  cntrStfnSttsCd?: StringNullableFilter;
  cntrTpCd?: StringNullableFilter;
  delYn?: StringNullableFilter;
  frstRegstId?: StringNullableFilter;
  frstRgsrDttm?: DateTimeNullableFilter;
  id?: StringFilter;
  inscTrgtYn?: StringNullableFilter;
  lastChgDttm?: DateTimeNullableFilter;
  lastChprId?: StringNullableFilter;
  mdfyDgcnt?: IntNullableFilter;
  reffNo?: StringNullableFilter;
  sealChpn1?: StringNullableFilter;
  sealChpn2?: StringNullableFilter;
  sealChpn3?: StringNullableFilter;
  sealChpnCd?: StringNullableFilter;
  sealNo1?: StringNullableFilter;
  sealNo2?: StringNullableFilter;
  sealNo3?: StringNullableFilter;
};
