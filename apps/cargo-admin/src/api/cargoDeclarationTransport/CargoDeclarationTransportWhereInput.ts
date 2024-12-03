import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CargoDeclarationTransportWhereInput = {
  chssNo?: StringNullableFilter;
  delYn?: StringNullableFilter;
  drvrNm?: StringNullableFilter;
  drvrPsprNo?: StringNullableFilter;
  frstRegstId?: StringNullableFilter;
  frstRgsrDttm?: DateTimeNullableFilter;
  id?: StringFilter;
  lastChgDttm?: DateTimeNullableFilter;
  lastChprId?: StringNullableFilter;
  mrn?: StringNullableFilter;
  trnpMethNatCd?: StringNullableFilter;
  vhclMnurCd?: StringNullableFilter;
  vhclNttn?: FloatNullableFilter;
  vhclPtCd?: StringNullableFilter;
  vhclRgsrNo?: StringNullableFilter;
  vhclSrno?: IntNullableFilter;
  vhclTtn?: FloatNullableFilter;
};
