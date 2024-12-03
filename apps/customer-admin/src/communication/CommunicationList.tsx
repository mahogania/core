import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CommunicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Communications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="bcc" source="bcc" />
        <TextField label="cc" source="cc" />
        <TextField label="comment_type" source="commentType" />
        <TextField label="communication_date" source="communicationDate" />
        <TextField label="communication_medium" source="communicationMedium" />
        <TextField label="communication_type" source="communicationType" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="delivery_status" source="deliveryStatus" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="email_account" source="emailAccount" />
        <TextField label="email_status" source="emailStatus" />
        <TextField label="email_template" source="emailTemplate" />
        <TextField label="feedback_request" source="feedbackRequest" />
        <TextField label="has_attachment" source="hasAttachment" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="imap_folder" source="imapFolder" />
        <TextField label="in_reply_to" source="inReplyTo" />
        <TextField label="messageId" source="messageId" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="owner" source="owner" />
        <TextField label="phone_no" source="phoneNo" />
        <TextField label="rating" source="rating" />
        <TextField label="read_by_recipient" source="readByRecipient" />
        <TextField label="read_by_recipient_on" source="readByRecipientOn" />
        <TextField label="read_receipt" source="readReceipt" />
        <TextField label="recipients" source="recipients" />
        <TextField label="reference_doctype" source="referenceDoctype" />
        <TextField label="reference_name" source="referenceName" />
        <TextField label="reference_owner" source="referenceOwner" />
        <TextField label="seen" source="seen" />
        <TextField label="send_after" source="sendAfter" />
        <TextField label="sender" source="sender" />
        <TextField label="sender_full_name" source="senderFullName" />
        <TextField label="sent_or_received" source="sentOrReceived" />
        <TextField label="status" source="status" />
        <TextField label="subject" source="subject" />
        <TextField label="text_content" source="textContent" />
        <TextField label="uid" source="uid" />
        <TextField
          label="unread_notification_sent"
          source="unreadNotificationSent"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
        <TextField label="userTags" source="userTags" />{" "}
      </Datagrid>
    </List>
  );
};
