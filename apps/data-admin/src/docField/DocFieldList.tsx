import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DocFieldList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DocFields"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="allow_bulk_edit" source="allowBulkEdit" />
        <TextField label="allow_in_quick_entry" source="allowInQuickEntry" />
        <TextField label="allow_on_submit" source="allowOnSubmit" />
        <TextField label="bold" source="bold" />
        <TextField label="collapsible" source="collapsible" />
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
        <TextField label="documentation_url" source="documentationUrl" />
        <TextField label="fetch_from" source="fetchFrom" />
        <TextField label="fetch_if_empty" source="fetchIfEmpty" />
        <TextField label="fieldname" source="fieldname" />
        <TextField label="fieldtype" source="fieldtype" />
        <TextField label="hidden" source="hidden" />
        <TextField label="hide_border" source="hideBorder" />
        <TextField label="hide_days" source="hideDays" />
        <TextField label="hide_seconds" source="hideSeconds" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField
          label="ignore_user_permissions"
          source="ignoreUserPermissions"
        />
        <TextField label="ignore_xss_filter" source="ignoreXssFilter" />
        <TextField label="in_filter" source="inFilter" />
        <TextField label="in_global_search" source="inGlobalSearch" />
        <TextField label="in_list_view" source="inListView" />
        <TextField label="in_preview" source="inPreview" />
        <TextField label="in_standard_filter" source="inStandardFilter" />
        <TextField label="is_virtual" source="isVirtual" />
        <TextField label="label" source="label" />
        <TextField label="length" source="length" />
        <TextField label="link_filters" source="linkFilters" />
        <TextField label="mandatory_depends_on" source="mandatoryDependsOn" />
        <TextField label="max_height" source="maxHeight" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="no_copy" source="noCopy" />
        <TextField label="non_negative" source="nonNegative" />
        <TextField label="oldfieldname" source="oldfieldname" />
        <TextField label="oldfieldtype" source="oldfieldtype" />
        <TextField label="options" source="options" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="permlevel" source="permlevel" />
        <TextField label="precision" source="precision" />
        <TextField label="print_hide" source="printHide" />
        <TextField label="print_hide_if_no_value" source="printHideIfNoValue" />
        <TextField label="print_width" source="printWidth" />
        <TextField label="read_only" source="readOnly" />
        <TextField label="read_only_depends_on" source="readOnlyDependsOn" />
        <TextField
          label="remember_last_selected_value"
          source="rememberLastSelectedValue"
        />
        <TextField label="report_hide" source="reportHide" />
        <TextField label="reqd" source="reqd" />
        <TextField label="search_index" source="searchIndex" />
        <TextField label="set_only_once" source="setOnlyOnce" />
        <TextField label="show_dashboard" source="showDashboard" />
        <TextField label="show_on_timeline" source="showOnTimeline" />
        <TextField label="show_preview_popup" source="showPreviewPopup" />
        <TextField label="sort_options" source="sortOptions" />
        <TextField label="translatable" source="translatable" />
        <TextField label="trigger" source="trigger" />
        <TextField label="unique" source="unique" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="width" source="width" />{" "}
      </Datagrid>
    </List>
  );
};
