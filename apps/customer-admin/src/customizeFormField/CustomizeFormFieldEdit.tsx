import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const CustomizeFormFieldEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="allow_bulk_edit" source="allowBulkEdit" />
        <BooleanInput label="allow_in_quick_entry" source="allowInQuickEntry" />
        <BooleanInput label="allow_on_submit" source="allowOnSubmit" />
        <BooleanInput label="bold" source="bold" />
        <BooleanInput label="collapsible" source="collapsible" />
        <TextInput
          label="collapsible_depends_on"
          multiline
          source="collapsibleDependsOn"
        />
        <NumberInput step={1} label="columns" source="columns" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="default" multiline source="defaultField" />
        <TextInput label="depends_on" multiline source="dependsOn" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="fetch_from" multiline source="fetchFrom" />
        <BooleanInput label="fetch_if_empty" source="fetchIfEmpty" />
        <TextInput label="fieldname" source="fieldname" />
        <TextInput label="fieldtype" source="fieldtype" />
        <BooleanInput label="hidden" source="hidden" />
        <BooleanInput label="hide_border" source="hideBorder" />
        <BooleanInput label="hide_days" source="hideDays" />
        <BooleanInput label="hide_seconds" source="hideSeconds" />
        <NumberInput step={1} label="idx" source="idx" />
        <BooleanInput
          label="ignore_user_permissions"
          source="ignoreUserPermissions"
        />
        <BooleanInput label="ignore_xss_filter" source="ignoreXssFilter" />
        <BooleanInput label="in_filter" source="inFilter" />
        <BooleanInput label="in_global_search" source="inGlobalSearch" />
        <BooleanInput label="in_list_view" source="inListView" />
        <BooleanInput label="in_preview" source="inPreview" />
        <BooleanInput label="in_standard_filter" source="inStandardFilter" />
        <BooleanInput label="is_custom_field" source="isCustomField" />
        <BooleanInput label="is_system_generated" source="isSystemGenerated" />
        <BooleanInput label="is_virtual" source="isVirtual" />
        <TextInput label="label" source="label" />
        <NumberInput step={1} label="length" source="length" />
        <div />
        <TextInput
          label="mandatory_depends_on"
          multiline
          source="mandatoryDependsOn"
        />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <BooleanInput label="no_copy" source="noCopy" />
        <BooleanInput label="non_negative" source="nonNegative" />
        <TextInput label="options" multiline source="options" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput step={1} label="permlevel" source="permlevel" />
        <TextInput label="precision" source="precision" />
        <BooleanInput label="print_hide" source="printHide" />
        <BooleanInput
          label="print_hide_if_no_value"
          source="printHideIfNoValue"
        />
        <TextInput label="print_width" source="printWidth" />
        <BooleanInput label="read_only" source="readOnly" />
        <TextInput
          label="read_only_depends_on"
          multiline
          source="readOnlyDependsOn"
        />
        <BooleanInput
          label="remember_last_selected_value"
          source="rememberLastSelectedValue"
        />
        <BooleanInput label="report_hide" source="reportHide" />
        <BooleanInput label="reqd" source="reqd" />
        <BooleanInput label="show_dashboard" source="showDashboard" />
        <BooleanInput label="sort_options" source="sortOptions" />
        <BooleanInput label="translatable" source="translatable" />
        <BooleanInput label="unique" source="unique" />
        <TextInput label="width" source="width" />
      </SimpleForm>
    </Edit>
  );
};
