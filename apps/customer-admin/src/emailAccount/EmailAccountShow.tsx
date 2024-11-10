import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const EmailAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="add_signature" source="addSignature" />
        <BooleanField
          label="always_use_account_email_id_as_sender"
          source="alwaysUseAccountEmailIdAsSender"
        />
        <BooleanField
          label="always_use_account_name_as_sender_name"
          source="alwaysUseAccountNameAsSenderName"
        />
        <BooleanField
          label="append_emails_to_sent_folder"
          source="appendEmailsToSentFolder"
        />
        <TextField label="append_to" source="appendTo" />
        <BooleanField
          label="ascii_encode_password"
          source="asciiEncodePassword"
        />
        <TextField label="attachment_limit" source="attachmentLimit" />
        <TextField label="auth_method" source="authMethod" />
        <TextField label="auto_reply_message" source="autoReplyMessage" />
        <BooleanField label="awaiting_password" source="awaitingPassword" />
        <TextField label="brand_logo" source="brandLogo" />
        <TextField label="connected_app" source="connectedApp" />
        <TextField label="connected_user" source="connectedUser" />
        <BooleanField label="create_contact" source="createContact" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <BooleanField label="default_incoming" source="defaultIncoming" />
        <BooleanField label="default_outgoing" source="defaultOutgoing" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="domain" source="domain" />
        <TextField label="email_account_name" source="emailAccountName" />
        <TextField label="email_id" source="emailId" />
        <TextField label="email_server" source="emailServer" />
        <TextField label="email_sync_option" source="emailSyncOption" />
        <BooleanField label="enable_auto_reply" source="enableAutoReply" />
        <BooleanField
          label="enable_automatic_linking"
          source="enableAutomaticLinking"
        />
        <BooleanField label="enable_incoming" source="enableIncoming" />
        <BooleanField label="enable_outgoing" source="enableOutgoing" />
        <TextField label="footer" source="footer" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="incoming_port" source="incomingPort" />
        <TextField label="initial_sync_count" source="initialSyncCount" />
        <TextField label="login_id" source="loginId" />
        <BooleanField
          label="login_id_is_different"
          source="loginIdIsDifferent"
        />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="no_failed" source="noFailed" />
        <BooleanField
          label="no_smtp_authentication"
          source="noSmtpAuthentication"
        />
        <BooleanField label="notify_if_unreplied" source="notifyIfUnreplied" />
        <TextField label="owner" source="owner" />
        <TextField label="password" source="password" />
        <TextField label="send_notification_to" source="sendNotificationTo" />
        <BooleanField
          label="send_unsubscribe_message"
          source="sendUnsubscribeMessage"
        />
        <TextField label="service" source="service" />
        <TextField label="signature" source="signature" />
        <TextField label="smtp_port" source="smtpPort" />
        <TextField label="smtp_server" source="smtpServer" />
        <BooleanField label="track_email_status" source="trackEmailStatus" />
        <TextField label="uidnext" source="uidnext" />
        <TextField label="uidvalidity" source="uidvalidity" />
        <TextField label="unreplied_for_mins" source="unrepliedForMins" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="use_imap" source="useImap" />
        <BooleanField label="use_ssl" source="useSsl" />
        <BooleanField label="use_ssl_for_outgoing" source="useSslForOutgoing" />
        <BooleanField label="use_starttls" source="useStarttls" />
        <BooleanField label="use_tls" source="useTls" />
      </SimpleShowLayout>
    </Show>
  );
};
