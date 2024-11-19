import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EmailDomainCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="append_emails_to_sent_folder"
          source="appendEmailsToSentFolder"
        />
        <NumberInput
          step={1}
          label="attachment_limit"
          source="attachmentLimit"
        />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="domain_name" source="domainName" />
        <TextInput label="email_server" source="emailServer" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="incoming_port" source="incomingPort" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="smtp_port" source="smtpPort" />
        <TextInput label="smtp_server" source="smtpServer" />
        <BooleanInput label="use_imap" source="useImap" />
        <BooleanInput label="use_ssl" source="useSsl" />
        <BooleanInput label="use_ssl_for_outgoing" source="useSslForOutgoing" />
        <BooleanInput label="use_starttls" source="useStarttls" />
        <BooleanInput label="use_tls" source="useTls" />
      </SimpleForm>
    </Create>
  );
};
