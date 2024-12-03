import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DataImportLogListRelationFilter } from "../dataImportLog/DataImportLogListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DataImportWhereInput = {
  creation?: DateTimeNullableFilter;
  dataImportLogs?: DataImportLogListRelationFilter;
  docstatus?: IntNullableFilter;
  googleSheetsUrl?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  importFile?: StringNullableFilter;
  importType?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  muteEmails?: IntNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  payloadCount?: IntNullableFilter;
  referenceDoctype?: StringNullableFilter;
  showFailedLogs?: IntNullableFilter;
  status?: StringNullableFilter;
  submitAfterImport?: IntNullableFilter;
  templateOptions?: StringNullableFilter;
  templateWarnings?: StringNullableFilter;
};
