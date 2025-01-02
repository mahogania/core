import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CariCagDcshBlCntrWhereInput = {
  cagMgmtNo?: StringNullableFilter;
  cntrNo?: StringNullableFilter;
  cntrSrno?: IntNullableFilter;
  cntrTpCd?: StringNullableFilter;
  delYn?: StringNullableFilter;
  ecntrWght?: FloatNullableFilter;
  frstRegstId?: StringNullableFilter;
  frstRgsrDttm?: DateTimeNullableFilter;
  id?: StringFilter;
  lastChgDttm?: DateTimeNullableFilter;
  lastChprId?: StringNullableFilter;
  mrn?: StringNullableFilter;
  pckgGcnt?: IntNullableFilter;
  pckgUtCd?: StringNullableFilter;
  sealChpn1?: StringNullableFilter;
  sealChpn2?: StringNullableFilter;
  sealChpn3?: StringNullableFilter;
  sealNo1?: StringNullableFilter;
  sealNo2?: StringNullableFilter;
  sealNo3?: StringNullableFilter;
  ttwg?: FloatNullableFilter;
};
