import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DocFieldCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="allow_bulk_edit" source="allowBulkEdit" />
        <NumberInput
          step={1}
          label="allow_in_quick_entry"
          source="allowInQuickEntry"
        />
        <NumberInput step={1} label="allow_on_submit" source="allowOnSubmit" />
        <NumberInput step={1} label="bold" source="bold" />
        <NumberInput step={1} label="collapsible" source="collapsible" />
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
        <TextInput label="documentation_url" source="documentationUrl" />
        <TextInput label="fetch_from" multiline source="fetchFrom" />
        <NumberInput step={1} label="fetch_if_empty" source="fetchIfEmpty" />
        <TextInput label="fieldname" source="fieldname" />
        <TextInput label="fieldtype" source="fieldtype" />
        <NumberInput step={1} label="hidden" source="hidden" />
        <NumberInput step={1} label="hide_border" source="hideBorder" />
        <NumberInput step={1} label="hide_days" source="hideDays" />
        <NumberInput step={1} label="hide_seconds" source="hideSeconds" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="ignore_user_permissions"
          source="ignoreUserPermissions"
        />
        <NumberInput
          step={1}
          label="ignore_xss_filter"
          source="ignoreXssFilter"
        />
        <NumberInput step={1} label="in_filter" source="inFilter" />
        <NumberInput
          step={1}
          label="in_global_search"
          source="inGlobalSearch"
        />
        <NumberInput step={1} label="in_list_view" source="inListView" />
        <NumberInput step={1} label="in_preview" source="inPreview" />
        <NumberInput
          step={1}
          label="in_standard_filter"
          source="inStandardFilter"
        />
        <NumberInput step={1} label="is_virtual" source="isVirtual" />
        <TextInput label="label" source="label" />
        <NumberInput step={1} label="length" source="length" />
        <div />
        <TextInput
          label="mandatory_depends_on"
          multiline
          source="mandatoryDependsOn"
        />
        <TextInput label="max_height" source="maxHeight" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="no_copy" source="noCopy" />
        <NumberInput step={1} label="non_negative" source="nonNegative" />
        <TextInput label="oldfieldname" source="oldfieldname" />
        <TextInput label="oldfieldtype" source="oldfieldtype" />
        <TextInput label="options" multiline source="options" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput step={1} label="permlevel" source="permlevel" />
        <TextInput label="precision" source="precision" />
        <NumberInput step={1} label="print_hide" source="printHide" />
        <NumberInput
          step={1}
          label="print_hide_if_no_value"
          source="printHideIfNoValue"
        />
        <TextInput label="print_width" source="printWidth" />
        <NumberInput step={1} label="read_only" source="readOnly" />
        <TextInput
          label="read_only_depends_on"
          multiline
          source="readOnlyDependsOn"
        />
        <NumberInput
          step={1}
          label="remember_last_selected_value"
          source="rememberLastSelectedValue"
        />
        <NumberInput step={1} label="report_hide" source="reportHide" />
        <NumberInput step={1} label="reqd" source="reqd" />
        <NumberInput step={1} label="search_index" source="searchIndex" />
        <NumberInput step={1} label="set_only_once" source="setOnlyOnce" />
        <NumberInput step={1} label="show_dashboard" source="showDashboard" />
        <NumberInput
          step={1}
          label="show_on_timeline"
          source="showOnTimeline"
        />
        <NumberInput
          step={1}
          label="show_preview_popup"
          source="showPreviewPopup"
        />
        <NumberInput step={1} label="sort_options" source="sortOptions" />
        <NumberInput step={1} label="translatable" source="translatable" />
        <TextInput label="trigger" source="trigger" />
        <NumberInput step={1} label="unique" source="unique" />
        <TextInput label="width" source="width" />
      </SimpleForm>
    </Create>
  );
};
