import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BomUpdateLogWhereInput = {
  amendedFrom?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  currentBom?: StringNullableFilter;
  currentLevel?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  errorLog?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  newBom?: StringNullableFilter;
  owner?: StringNullableFilter;
  processedBoms?: StringNullableFilter;
  status?: StringNullableFilter;
  updateType?: StringNullableFilter;
};
