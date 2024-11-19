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

export const EmailAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="add_signature" source="addSignature" />
        <BooleanInput
          label="always_use_account_email_id_as_sender"
          source="alwaysUseAccountEmailIdAsSender"
        />
        <BooleanInput
          label="always_use_account_name_as_sender_name"
          source="alwaysUseAccountNameAsSenderName"
        />
        <BooleanInput
          label="append_emails_to_sent_folder"
          source="appendEmailsToSentFolder"
        />
        <TextInput label="append_to" source="appendTo" />
        <BooleanInput
          label="ascii_encode_password"
          source="asciiEncodePassword"
        />
        <NumberInput
          step={1}
          label="attachment_limit"
          source="attachmentLimit"
        />
        <TextInput label="auth_method" source="authMethod" />
        <TextInput
          label="auto_reply_message"
          multiline
          source="autoReplyMessage"
        />
        <BooleanInput label="awaiting_password" source="awaitingPassword" />
        <TextInput label="brand_logo" multiline source="brandLogo" />
        <TextInput label="connected_app" source="connectedApp" />
        <TextInput label="connected_user" source="connectedUser" />
        <BooleanInput label="create_contact" source="createContact" />
        <DateTimeInput label="creation" source="creation" />
        <BooleanInput label="default_incoming" source="defaultIncoming" />
        <BooleanInput label="default_outgoing" source="defaultOutgoing" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="domain" source="domain" />
        <TextInput label="email_account_name" source="emailAccountName" />
        <TextInput label="email_id" source="emailId" />
        <TextInput label="email_server" source="emailServer" />
        <TextInput label="email_sync_option" source="emailSyncOption" />
        <BooleanInput label="enable_auto_reply" source="enableAutoReply" />
        <BooleanInput
          label="enable_automatic_linking"
          source="enableAutomaticLinking"
        />
        <BooleanInput label="enable_incoming" source="enableIncoming" />
        <BooleanInput label="enable_outgoing" source="enableOutgoing" />
        <TextInput label="footer" multiline source="footer" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="incoming_port" source="incomingPort" />
        <TextInput label="initial_sync_count" source="initialSyncCount" />
        <TextInput label="login_id" source="loginId" />
        <BooleanInput
          label="login_id_is_different"
          source="loginIdIsDifferent"
        />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="no_failed" source="noFailed" />
        <BooleanInput
          label="no_smtp_authentication"
          source="noSmtpAuthentication"
        />
        <BooleanInput label="notify_if_unreplied" source="notifyIfUnreplied" />
        <TextInput label="owner" source="owner" />
        <TextInput label="password" multiline source="password" />
        <TextInput
          label="send_notification_to"
          multiline
          source="sendNotificationTo"
        />
        <BooleanInput
          label="send_unsubscribe_message"
          source="sendUnsubscribeMessage"
        />
        <TextInput label="service" source="service" />
        <TextInput label="signature" multiline source="signature" />
        <TextInput label="smtp_port" source="smtpPort" />
        <TextInput label="smtp_server" source="smtpServer" />
        <BooleanInput label="track_email_status" source="trackEmailStatus" />
        <NumberInput step={1} label="uidnext" source="uidnext" />
        <TextInput label="uidvalidity" source="uidvalidity" />
        <NumberInput
          step={1}
          label="unreplied_for_mins"
          source="unrepliedForMins"
        />
        <BooleanInput label="use_imap" source="useImap" />
        <BooleanInput label="use_ssl" source="useSsl" />
        <BooleanInput label="use_ssl_for_outgoing" source="useSslForOutgoing" />
        <BooleanInput label="use_starttls" source="useStarttls" />
        <BooleanInput label="use_tls" source="useTls" />
      </SimpleForm>
    </Edit>
  );
};
