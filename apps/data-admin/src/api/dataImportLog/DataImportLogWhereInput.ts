import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DataImportWhereUniqueInput } from "../dataImport/DataImportWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DataImportLogWhereInput = {
  creation?: DateTimeNullableFilter;
  dataImport?: DataImportWhereUniqueInput;
  docname?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  exception?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  logIndex?: IntNullableFilter;
  messages?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  rowIndexes?: StringNullableFilter;
  success?: IntNullableFilter;
};
