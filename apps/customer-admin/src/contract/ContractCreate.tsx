import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const ContractCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="contract_template" source="contractTemplate" />
        <TextInput label="contract_terms" multiline source="contractTerms" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="document_name" source="documentName" />
        <TextInput label="document_type" source="documentType" />
        <DateTimeInput label="end_date" source="endDate" />
        <DateTimeInput
          label="fulfilment_deadline"
          source="fulfilmentDeadline"
        />
        <TextInput label="fulfilment_status" source="fulfilmentStatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="ip_address" source="ipAddress" />
        <BooleanInput label="is_signed" source="isSigned" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="party_name" source="partyName" />
        <TextInput label="party_type" source="partyType" />
        <TextInput label="party_user" source="partyUser" />
        <BooleanInput label="requires_fulfilment" source="requiresFulfilment" />
        <TextInput label="signed_by_company" source="signedByCompany" />
        <DateTimeInput label="signed_on" source="signedOn" />
        <TextInput label="signee" source="signee" />
        <TextInput label="signee_company" multiline source="signeeCompany" />
        <DateTimeInput label="start_date" source="startDate" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
