import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CommunicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bcc" multiline source="bcc" />
        <TextInput label="cc" multiline source="cc" />
        <TextInput label="comment_type" source="commentType" />
        <DateTimeInput label="communication_date" source="communicationDate" />
        <TextInput label="communication_medium" source="communicationMedium" />
        <TextInput label="communication_type" source="communicationType" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="delivery_status" source="deliveryStatus" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="email_account" source="emailAccount" />
        <TextInput label="email_status" source="emailStatus" />
        <TextInput label="email_template" source="emailTemplate" />
        <TextInput label="feedback_request" source="feedbackRequest" />
        <NumberInput step={1} label="has_attachment" source="hasAttachment" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="imap_folder" source="imapFolder" />
        <TextInput label="in_reply_to" source="inReplyTo" />
        <TextInput label="messageId" multiline source="messageId" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="owner" source="owner" />
        <TextInput label="phone_no" source="phoneNo" />
        <NumberInput step={1} label="rating" source="rating" />
        <NumberInput
          step={1}
          label="read_by_recipient"
          source="readByRecipient"
        />
        <DateTimeInput
          label="read_by_recipient_on"
          source="readByRecipientOn"
        />
        <NumberInput step={1} label="read_receipt" source="readReceipt" />
        <TextInput label="recipients" multiline source="recipients" />
        <TextInput label="reference_doctype" source="referenceDoctype" />
        <TextInput label="reference_name" source="referenceName" />
        <TextInput label="reference_owner" source="referenceOwner" />
        <NumberInput step={1} label="seen" source="seen" />
        <DateTimeInput label="send_after" source="sendAfter" />
        <TextInput label="sender" source="sender" />
        <TextInput label="sender_full_name" source="senderFullName" />
        <TextInput label="sent_or_received" source="sentOrReceived" />
        <TextInput label="status" source="status" />
        <TextInput label="subject" multiline source="subject" />
        <TextInput label="text_content" multiline source="textContent" />
        <NumberInput step={1} label="uid" source="uid" />
        <NumberInput
          step={1}
          label="unread_notification_sent"
          source="unreadNotificationSent"
        />
        <TextInput label="user" source="user" />
        <TextInput label="userTags" multiline source="userTags" />
      </SimpleForm>
    </Edit>
  );
};
