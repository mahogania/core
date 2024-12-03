import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CargoDeclarationVehicleWhereInput = {
  cagMgmtNo?: StringNullableFilter;
  chssNo?: StringNullableFilter;
  delYn?: StringNullableFilter;
  engnClndGcnt?: IntNullableFilter;
  frstRegstId?: StringNullableFilter;
  frstRgsrDttm?: DateTimeNullableFilter;
  id?: StringFilter;
  lastChgDttm?: DateTimeNullableFilter;
  lastChprId?: StringNullableFilter;
  mrn?: StringNullableFilter;
  vhclKndNm?: StringNullableFilter;
  vhclMdlCd?: StringNullableFilter;
  vhclMnfcYy?: StringNullableFilter;
  vhclMnurCd?: StringNullableFilter;
  vhclRgsrNo?: StringNullableFilter;
  vhclSrno?: IntNullableFilter;
  vhclTotlWght?: FloatNullableFilter;
};
