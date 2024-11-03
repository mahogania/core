import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DocTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DocTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="allow_auto_repeat" source="allowAutoRepeat" />
        <TextField label="allow_copy" source="allowCopy" />
        <TextField
          label="allow_events_in_timeline"
          source="allowEventsInTimeline"
        />
        <TextField label="allow_guest_to_view" source="allowGuestToView" />
        <TextField label="allow_import" source="allowImport" />
        <TextField label="allow_rename" source="allowRename" />
        <TextField label="app" source="appField" />
        <TextField label="autoname" source="autoname" />
        <TextField label="beta" source="beta" />
        <TextField label="color" source="color" />
        <TextField label="colour" source="colour" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="custom" source="custom" />
        <TextField
          label="default_email_template"
          source="defaultEmailTemplate"
        />
        <TextField label="default_print_format" source="defaultPrintFormat" />
        <TextField label="default_view" source="defaultView" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="document_type" source="documentType" />
        <TextField label="documentation" source="documentation" />
        <TextField label="editable_grid" source="editableGrid" />
        <TextField label="email_append_to" source="emailAppendTo" />
        <TextField label="engine" source="engine" />
        <TextField
          label="force_re_route_to_default_view"
          source="forceReRouteToDefaultView"
        />
        <TextField label="has_web_view" source="hasWebView" />
        <TextField label="hide_toolbar" source="hideToolbar" />
        <TextField label="icon" source="icon" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image_field" source="imageField" />
        <TextField label="in_create" source="inCreate" />
        <TextField
          label="index_web_pages_for_search"
          source="indexWebPagesForSearch"
        />
        <TextField label="is_calendar_and_gantt" source="isCalendarAndGantt" />
        <TextField label="is_published_field" source="isPublishedField" />
        <TextField label="is_submittable" source="isSubmittable" />
        <TextField label="is_tree" source="isTree" />
        <TextField label="is_virtual" source="isVirtual" />
        <TextField label="issingle" source="issingle" />
        <TextField label="istable" source="istable" />
        <TextField label="last_update" source="lastUpdate" />
        <TextField
          label="make_attachments_public"
          source="makeAttachmentsPublic"
        />
        <TextField label="max_attachments" source="maxAttachments" />
        <TextField label="menu_index" source="menuIndex" />
        <TextField label="migration_hash" source="migrationHash" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="module" source="moduleField" />
        <TextField label="name" source="name" />
        <TextField label="naming_rule" source="namingRule" />
        <TextField label="nsm_parent_field" source="nsmParentField" />
        <TextField label="owner" source="owner" />
        <TextField label="parent_node" source="parentNode" />
        <TextField label="print_outline" source="printOutline" />
        <TextField label="queue_in_background" source="queueInBackground" />
        <TextField label="quick_entry" source="quickEntry" />
        <TextField label="read_only" source="readOnly" />
        <TextField label="restrict_to_domain" source="restrictToDomain" />
        <TextField label="route" source="route" />
        <TextField label="search_fields" source="searchFields" />
        <TextField label="sender_field" source="senderField" />
        <TextField label="sender_name_field" source="senderNameField" />
        <TextField
          label="show_name_in_global_search"
          source="showNameInGlobalSearch"
        />
        <TextField label="show_preview_popup" source="showPreviewPopup" />
        <TextField
          label="show_title_field_in_link"
          source="showTitleFieldInLink"
        />
        <TextField label="smallicon" source="smallicon" />
        <TextField label="sort_field" source="sortField" />
        <TextField label="sort_order" source="sortOrder" />
        <TextField label="subject" source="subject" />
        <TextField label="subject_field" source="subjectField" />
        <TextField label="tag_fields" source="tagFields" />
        <TextField label="timeline_field" source="timelineField" />
        <TextField label="title_field" source="titleField" />
        <TextField label="track_changes" source="trackChanges" />
        <TextField label="track_seen" source="trackSeen" />
        <TextField label="track_views" source="trackViews" />
        <TextField label="translated_doctype" source="translatedDoctype" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_tags" source="userTags" />
        <TextField
          label="website_search_field"
          source="websiteSearchField"
        />{" "}
      </Datagrid>
    </List>
  );
};
