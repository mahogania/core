import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type DocFieldWhereInput = {
  allowBulkEdit?: IntNullableFilter;
  allowInQuickEntry?: IntNullableFilter;
  allowOnSubmit?: IntNullableFilter;
  bold?: IntNullableFilter;
  collapsible?: IntNullableFilter;
  collapsibleDependsOn?: StringNullableFilter;
  columns?: IntNullableFilter;
  creation?: DateTimeNullableFilter;
  defaultField?: StringNullableFilter;
  dependsOn?: StringNullableFilter;
  description?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  documentationUrl?: StringNullableFilter;
  fetchFrom?: StringNullableFilter;
  fetchIfEmpty?: IntNullableFilter;
  fieldname?: StringNullableFilter;
  fieldtype?: StringNullableFilter;
  hidden?: IntNullableFilter;
  hideBorder?: IntNullableFilter;
  hideDays?: IntNullableFilter;
  hideSeconds?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  ignoreUserPermissions?: IntNullableFilter;
  ignoreXssFilter?: IntNullableFilter;
  inFilter?: IntNullableFilter;
  inGlobalSearch?: IntNullableFilter;
  inListView?: IntNullableFilter;
  inPreview?: IntNullableFilter;
  inStandardFilter?: IntNullableFilter;
  isVirtual?: IntNullableFilter;
  label?: StringNullableFilter;
  length?: IntNullableFilter;
  linkFilters?: JsonFilter;
  mandatoryDependsOn?: StringNullableFilter;
  maxHeight?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  noCopy?: IntNullableFilter;
  nonNegative?: IntNullableFilter;
  oldfieldname?: StringNullableFilter;
  oldfieldtype?: StringNullableFilter;
  options?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  permlevel?: IntNullableFilter;
  precision?: StringNullableFilter;
  printHide?: IntNullableFilter;
  printHideIfNoValue?: IntNullableFilter;
  printWidth?: StringNullableFilter;
  readOnly?: IntNullableFilter;
  readOnlyDependsOn?: StringNullableFilter;
  rememberLastSelectedValue?: IntNullableFilter;
  reportHide?: IntNullableFilter;
  reqd?: IntNullableFilter;
  searchIndex?: IntNullableFilter;
  setOnlyOnce?: IntNullableFilter;
  showDashboard?: IntNullableFilter;
  showOnTimeline?: IntNullableFilter;
  showPreviewPopup?: IntNullableFilter;
  sortOptions?: IntNullableFilter;
  translatable?: IntNullableFilter;
  trigger?: StringNullableFilter;
  unique?: IntNullableFilter;
  width?: StringNullableFilter;
};
