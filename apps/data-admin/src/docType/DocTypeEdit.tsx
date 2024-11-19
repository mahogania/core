import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DocTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="allow_auto_repeat"
          source="allowAutoRepeat"
        />
        <NumberInput step={1} label="allow_copy" source="allowCopy" />
        <NumberInput
          step={1}
          label="allow_events_in_timeline"
          source="allowEventsInTimeline"
        />
        <NumberInput
          step={1}
          label="allow_guest_to_view"
          source="allowGuestToView"
        />
        <NumberInput step={1} label="allow_import" source="allowImport" />
        <NumberInput step={1} label="allow_rename" source="allowRename" />
        <TextInput label="app" source="appField" />
        <TextInput label="autoname" source="autoname" />
        <NumberInput step={1} label="beta" source="beta" />
        <TextInput label="color" source="color" />
        <TextInput label="colour" source="colour" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="custom" source="custom" />
        <TextInput
          label="default_email_template"
          source="defaultEmailTemplate"
        />
        <TextInput label="default_print_format" source="defaultPrintFormat" />
        <TextInput label="default_view" source="defaultView" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="document_type" source="documentType" />
        <TextInput label="documentation" source="documentation" />
        <NumberInput step={1} label="editable_grid" source="editableGrid" />
        <NumberInput step={1} label="email_append_to" source="emailAppendTo" />
        <TextInput label="engine" source="engine" />
        <NumberInput
          step={1}
          label="force_re_route_to_default_view"
          source="forceReRouteToDefaultView"
        />
        <NumberInput step={1} label="has_web_view" source="hasWebView" />
        <NumberInput step={1} label="hide_toolbar" source="hideToolbar" />
        <TextInput label="icon" source="icon" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image_field" source="imageField" />
        <NumberInput step={1} label="in_create" source="inCreate" />
        <NumberInput
          step={1}
          label="index_web_pages_for_search"
          source="indexWebPagesForSearch"
        />
        <NumberInput
          step={1}
          label="is_calendar_and_gantt"
          source="isCalendarAndGantt"
        />
        <TextInput label="is_published_field" source="isPublishedField" />
        <NumberInput step={1} label="is_submittable" source="isSubmittable" />
        <NumberInput step={1} label="is_tree" source="isTree" />
        <NumberInput step={1} label="is_virtual" source="isVirtual" />
        <NumberInput step={1} label="issingle" source="issingle" />
        <NumberInput step={1} label="istable" source="istable" />
        <TextInput label="last_update" source="lastUpdate" />
        <NumberInput
          step={1}
          label="make_attachments_public"
          source="makeAttachmentsPublic"
        />
        <NumberInput step={1} label="max_attachments" source="maxAttachments" />
        <NumberInput step={1} label="menu_index" source="menuIndex" />
        <TextInput label="migration_hash" source="migrationHash" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="module" source="moduleField" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_rule" source="namingRule" />
        <TextInput label="nsm_parent_field" source="nsmParentField" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent_node" source="parentNode" />
        <TextInput label="print_outline" source="printOutline" />
        <NumberInput
          step={1}
          label="queue_in_background"
          source="queueInBackground"
        />
        <NumberInput step={1} label="quick_entry" source="quickEntry" />
        <NumberInput step={1} label="read_only" source="readOnly" />
        <TextInput label="restrict_to_domain" source="restrictToDomain" />
        <TextInput label="route" source="route" />
        <TextInput label="search_fields" source="searchFields" />
        <TextInput label="sender_field" source="senderField" />
        <TextInput label="sender_name_field" source="senderNameField" />
        <NumberInput
          step={1}
          label="show_name_in_global_search"
          source="showNameInGlobalSearch"
        />
        <NumberInput
          step={1}
          label="show_preview_popup"
          source="showPreviewPopup"
        />
        <NumberInput
          step={1}
          label="show_title_field_in_link"
          source="showTitleFieldInLink"
        />
        <TextInput label="smallicon" source="smallicon" />
        <TextInput label="sort_field" source="sortField" />
        <TextInput label="sort_order" source="sortOrder" />
        <TextInput label="subject" source="subject" />
        <TextInput label="subject_field" source="subjectField" />
        <TextInput label="tag_fields" source="tagFields" />
        <TextInput label="timeline_field" source="timelineField" />
        <TextInput label="title_field" source="titleField" />
        <NumberInput step={1} label="track_changes" source="trackChanges" />
        <NumberInput step={1} label="track_seen" source="trackSeen" />
        <NumberInput step={1} label="track_views" source="trackViews" />
        <NumberInput
          step={1}
          label="translated_doctype"
          source="translatedDoctype"
        />
        <TextInput label="user_tags" multiline source="userTags" />
        <TextInput label="website_search_field" source="websiteSearchField" />
      </SimpleForm>
    </Edit>
  );
};
