import { InputJsonValue } from "../../types";

export type CustomizeFormFieldUpdateInput = {
  allowBulkEdit?: boolean | null;
  allowInQuickEntry?: boolean | null;
  allowOnSubmit?: boolean | null;
  bold?: boolean | null;
  collapsible?: boolean | null;
  collapsibleDependsOn?: string | null;
  columns?: number | null;
  creation?: Date | null;
  defaultField?: string | null;
  dependsOn?: string | null;
  description?: string | null;
  docstatus?: number | null;
  fetchFrom?: string | null;
  fetchIfEmpty?: boolean | null;
  fieldname?: string | null;
  fieldtype?: string | null;
  hidden?: boolean | null;
  hideBorder?: boolean | null;
  hideDays?: boolean | null;
  hideSeconds?: boolean | null;
  idx?: number | null;
  ignoreUserPermissions?: boolean | null;
  ignoreXssFilter?: boolean | null;
  inFilter?: boolean | null;
  inGlobalSearch?: boolean | null;
  inListView?: boolean | null;
  inPreview?: boolean | null;
  inStandardFilter?: boolean | null;
  isCustomField?: boolean | null;
  isSystemGenerated?: boolean | null;
  isVirtual?: boolean | null;
  label?: string | null;
  length?: number | null;
  linkFilters?: InputJsonValue;
  mandatoryDependsOn?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  noCopy?: boolean | null;
  nonNegative?: boolean | null;
  options?: string | null;
  owner?: string | null;
  parent?: string | null;
  parentfield?: string | null;
  parenttype?: string | null;
  permlevel?: number | null;
  precision?: string | null;
  printHide?: boolean | null;
  printHideIfNoValue?: boolean | null;
  printWidth?: string | null;
  readOnly?: boolean | null;
  readOnlyDependsOn?: string | null;
  rememberLastSelectedValue?: boolean | null;
  reportHide?: boolean | null;
  reqd?: boolean | null;
  showDashboard?: boolean | null;
  sortOptions?: boolean | null;
  translatable?: boolean | null;
  unique?: boolean | null;
  width?: string | null;
};
