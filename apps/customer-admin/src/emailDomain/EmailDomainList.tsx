import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const EmailDomainList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmailDomains"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField
          label="append_emails_to_sent_folder"
          source="appendEmailsToSentFolder"
        />
        <TextField label="attachment_limit" source="attachmentLimit" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="domain_name" source="domainName" />
        <TextField label="email_server" source="emailServer" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="incoming_port" source="incomingPort" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="smtp_port" source="smtpPort" />
        <TextField label="smtp_server" source="smtpServer" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="use_imap" source="useImap" />
        <BooleanField label="use_ssl" source="useSsl" />
        <BooleanField label="use_ssl_for_outgoing" source="useSslForOutgoing" />
        <BooleanField label="use_starttls" source="useStarttls" />
        <BooleanField label="use_tls" source="useTls" />{" "}
      </Datagrid>
    </List>
  );
};
