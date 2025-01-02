import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CariCagDcshBlTrlrWhereInput = {
  cagMgmtNo?: StringNullableFilter;
  chssNo?: StringNullableFilter;
  delYn?: StringNullableFilter;
  frstRegstId?: StringNullableFilter;
  frstRgsrDttm?: DateTimeNullableFilter;
  id?: StringFilter;
  lastChgDttm?: DateTimeNullableFilter;
  lastChprId?: StringNullableFilter;
  mrn?: StringNullableFilter;
  trlrSrno?: IntNullableFilter;
  trlrStsz?: StringNullableFilter;
  vhclRgsrNo?: StringNullableFilter;
};
