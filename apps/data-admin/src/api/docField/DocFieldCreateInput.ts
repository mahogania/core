import { InputJsonValue } from "../../types";

export type DocFieldCreateInput = {
  allowBulkEdit?: number | null;
  allowInQuickEntry?: number | null;
  allowOnSubmit?: number | null;
  bold?: number | null;
  collapsible?: number | null;
  collapsibleDependsOn?: string | null;
  columns?: number | null;
  creation?: Date | null;
  defaultField?: string | null;
  dependsOn?: string | null;
  description?: string | null;
  docstatus?: number | null;
  documentationUrl?: string | null;
  fetchFrom?: string | null;
  fetchIfEmpty?: number | null;
  fieldname?: string | null;
  fieldtype?: string | null;
  hidden?: number | null;
  hideBorder?: number | null;
  hideDays?: number | null;
  hideSeconds?: number | null;
  idx?: number | null;
  ignoreUserPermissions?: number | null;
  ignoreXssFilter?: number | null;
  inFilter?: number | null;
  inGlobalSearch?: number | null;
  inListView?: number | null;
  inPreview?: number | null;
  inStandardFilter?: number | null;
  isVirtual?: number | null;
  label?: string | null;
  length?: number | null;
  linkFilters?: InputJsonValue;
  mandatoryDependsOn?: string | null;
  maxHeight?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  noCopy?: number | null;
  nonNegative?: number | null;
  oldfieldname?: string | null;
  oldfieldtype?: string | null;
  options?: string | null;
  owner?: string | null;
  parent?: string | null;
  parentfield?: string | null;
  parenttype?: string | null;
  permlevel?: number | null;
  precision?: string | null;
  printHide?: number | null;
  printHideIfNoValue?: number | null;
  printWidth?: string | null;
  readOnly?: number | null;
  readOnlyDependsOn?: string | null;
  rememberLastSelectedValue?: number | null;
  reportHide?: number | null;
  reqd?: number | null;
  searchIndex?: number | null;
  setOnlyOnce?: number | null;
  showDashboard?: number | null;
  showOnTimeline?: number | null;
  showPreviewPopup?: number | null;
  sortOptions?: number | null;
  translatable?: number | null;
  trigger?: string | null;
  unique?: number | null;
  width?: string | null;
};
