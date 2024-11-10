import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const CustomFieldShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="allow_in_quick_entry" source="allowInQuickEntry" />
        <BooleanField label="allow_on_submit" source="allowOnSubmit" />
        <BooleanField label="bold" source="bold" />
        <BooleanField label="collapsible" source="collapsible" />
        <TextField
          label="collapsible_depends_on"
          source="collapsibleDependsOn"
        />
        <TextField label="columns" source="columns" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="default" source="defaultField" />
        <TextField label="depends_on" source="dependsOn" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="dt" source="dt" />
        <TextField label="fetch_from" source="fetchFrom" />
        <BooleanField label="fetch_if_empty" source="fetchIfEmpty" />
        <TextField label="fieldname" source="fieldname" />
        <TextField label="fieldtype" source="fieldtype" />
        <BooleanField label="hidden" source="hidden" />
        <BooleanField label="hide_border" source="hideBorder" />
        <BooleanField label="hide_days" source="hideDays" />
        <BooleanField label="hide_seconds" source="hideSeconds" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <BooleanField
          label="ignore_user_permissions"
          source="ignoreUserPermissions"
        />
        <BooleanField label="ignore_xss_filter" source="ignoreXssFilter" />
        <BooleanField label="in_global_search" source="inGlobalSearch" />
        <BooleanField label="in_list_view" source="inListView" />
        <BooleanField label="in_preview" source="inPreview" />
        <BooleanField label="in_standard_filter" source="inStandardFilter" />
        <TextField label="insert_after" source="insertAfter" />
        <BooleanField label="is_system_generated" source="isSystemGenerated" />
        <BooleanField label="is_virtual" source="isVirtual" />
        <TextField label="label" source="label" />
        <TextField label="length" source="length" />
        <TextField label="link_filters" source="linkFilters" />
        <TextField label="mandatory_depends_on" source="mandatoryDependsOn" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="module" source="moduleField" />
        <TextField label="name" source="name" />
        <BooleanField label="no_copy" source="noCopy" />
        <BooleanField label="non_negative" source="nonNegative" />
        <TextField label="options" source="options" />
        <TextField label="owner" source="owner" />
        <TextField label="permlevel" source="permlevel" />
        <TextField label="precision" source="precision" />
        <BooleanField label="print_hide" source="printHide" />
        <BooleanField
          label="print_hide_if_no_value"
          source="printHideIfNoValue"
        />
        <TextField label="print_width" source="printWidth" />
        <BooleanField label="read_only" source="readOnly" />
        <TextField label="read_only_depends_on" source="readOnlyDependsOn" />
        <BooleanField label="report_hide" source="reportHide" />
        <BooleanField label="reqd" source="reqd" />
        <BooleanField label="search_index" source="searchIndex" />
        <BooleanField label="show_dashboard" source="showDashboard" />
        <BooleanField label="sort_options" source="sortOptions" />
        <BooleanField label="translatable" source="translatable" />
        <BooleanField label="unique" source="unique" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="width" source="width" />
      </SimpleShowLayout>
    </Show>
  );
};
